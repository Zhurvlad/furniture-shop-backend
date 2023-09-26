import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 4,
        username: 'Va1',
        email: 'V1',
      },
    },
  })
  user: {
    userId: number,
    username: string,
    email: string
  };

  @ApiProperty({ example: 'Выполнен вход' })
  msg: string;
}

export class LogOutUserResponse {
  @ApiProperty({ example: 'Сессия пользователя Va1 завершена' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 4 })
  userId: number;

  @ApiProperty({ example: 'Va1' })
  username: string;

  @ApiProperty({ example: 'mmm@mail.ru' })
  email: string;
}

export class SignUpUserResponse {
  @ApiProperty({ example: 5 })
  id: number;

  @ApiProperty({ example: 'v1@mail.ru' })
  email: string;

  @ApiProperty({ example: '$2b$10$c5WAJn/PivARImD3CZVffen95A.g2LN.layf34RHDBHUbFF' })
  password: string;

  @ApiProperty({ example: 'V1' })
  username: string;

  @ApiProperty({ example: '2023-09-24T22:39:18.270Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-09-24T22:39:18.270Z' })
  createdAt: number;
}

