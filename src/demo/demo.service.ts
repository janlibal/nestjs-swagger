import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateDemoDto } from './dto/create-demo.dto'
import { UpdateDemoDto } from './dto/update-demo.dto'
import usaStates from '../data/us.json'
import { Demo } from './entities/demo.entity'

@Injectable()
export class DemoService {
  usaStatesList: Demo[]

  constructor() {
    this.usaStatesList = usaStates
  }

  /* 
  If the id is sent and unique, adds the new state it creates to the data.
  If the id is not sent, it fills in automatically and adds the new state it creates to the data.
  If the id is sent and already exists, it returns an error.
  */
  create(createDemoDto: CreateDemoDto): CreateDemoDto {
    if (createDemoDto.id) {
      const isIdExist = this.usaStatesList.findIndex(
        (x) => x.id === createDemoDto.id,
      )
      if (isIdExist != -1) {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
      } else {
        this.usaStatesList.push(createDemoDto)
        return createDemoDto
      }
    } else {
      createDemoDto.id =
        this.usaStatesList[this.usaStatesList.length - 1].id + 1
      this.usaStatesList.push(createDemoDto)
      return createDemoDto
    }
  }

  // Returning all data
  findAll(): Demo[] {
    return this.usaStatesList
  }

  /* 
  It finds and returns data matching the given ID. 
  If it cannot find it, it returns an error 
  */
  findOne(id: number): Demo {
    const usaState = this.usaStatesList.find((x) => x.id === id)

    if (usaState) {
      return usaState
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }

  /* 
  It finds and updates data matching the given ID.
  If it cannot find it, it returns an error 
  */
  update(id: number, updateDemoDto: UpdateDemoDto): Demo {
    const usaStateId = this.usaStatesList.findIndex((x) => x.id === id)

    if (usaStateId != -1) {
      this.usaStatesList[usaStateId].name = updateDemoDto.name
      this.usaStatesList[usaStateId].abbreviation = updateDemoDto.abbreviation
      return this.usaStatesList[usaStateId]
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }

  /* 
  It finds and remove data matching the given ID.
  If it cannot find it, it returns an error
  */
  remove(id: number) {
    const usaStateId = this.usaStatesList.findIndex((x) => x.id === id)

    if (usaStateId != -1) {
      this.usaStatesList.splice(usaStateId, 1)
      return true
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }
}
