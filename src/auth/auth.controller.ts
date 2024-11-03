import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  SerializeOptions,
} from '@nestjs/common'

import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { LoginResponseDto } from './dto/login.response.dto'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { Serialize } from 'src/interceptors/serialize.decorator'
import { User } from 'src/users/domain/user.domain'
import { AuthRegisterLoginDto } from './dto/auth.register.login.dto'

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  

  @Post('email/login')
  @SerializeOptions({
    groups: ['me'],
  })
  @ApiOkResponse({
    type: LoginResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  @Serialize(LoginResponseDto)
  public login(@Body() loginDto: AuthEmailLoginDto) {
    const object = null
    return object
  }

  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() createUserDto: AuthRegisterLoginDto) {
    return true
  }

  
  @SerializeOptions({
    groups: ['me'],
  })
  @Get('me')
  //@UseGuards(AuthGuard('jwt'))
  //@UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Serialize(User)
  public me() {
    const object = null
    return object
  }

  /*@ApiBearerAuth()
  @Post('logout')
  //@UseGuards(AuthGuard('jwt'))
  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  public async logout(@Request() request): Promise<void> {
    await this.authService.logout({
      sessionId: request.user.sessionId,
      userId: request.user.id,
    })
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Post('refresh')
  @UseGuards(AuthGuard('jwt-refresh'))
  @HttpCode(HttpStatus.OK)
  public refresh(@Request() request): Promise<RefreshResponseDto> {
    return this.authService.refreshToken({
      sessionId: request.user.sessionId,
      hash: request.user.hash,
    })
  }*/

  /*@Post('email/confirm')
  @HttpCode(HttpStatus.NO_CONTENT)
  async confirmEmail(
    @Body() confirmEmailDto: AuthConfirmEmailDto,
  ): Promise<void> {
    return this.authService.confirmEmail(confirmEmailDto.hash)
  }

  @Post('email/confirm/new')
  @HttpCode(HttpStatus.NO_CONTENT)
  async confirmNewEmail(
    @Body() confirmEmailDto: AuthConfirmEmailDto,
  ): Promise<void> {
    return this.authService.confirmNewEmail(confirmEmailDto.hash)
  }

  @Post('forgot/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async forgotPassword(
    @Body() forgotPasswordDto: AuthForgotPasswordDto,
  ): Promise<void> {
    return this.authService.forgotPassword(forgotPasswordDto.email)
  }

  @Post('reset/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  resetPassword(@Body() resetPasswordDto: AuthResetPasswordDto): Promise<void> {
    return this.authService.resetPassword(
      resetPasswordDto.hash,
      resetPasswordDto.password,
    )
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Patch('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: User,
  })
  public update(
    @Request() request,
    @Body() userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    return this.authService.update(request.user, userDto)
  }

  @ApiBearerAuth()
  @Delete('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Request() request): Promise<void> {
    return this.authService.softDelete(request.user)
  }*/
}
