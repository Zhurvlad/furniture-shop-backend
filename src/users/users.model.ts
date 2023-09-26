import { BeforeCreate, Column, Model, Table, DataType } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';


@Table
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string


    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string




    /*  @BeforeCreate
      async hashPassword() {
          this.password = await bcrypt.hash(this.password, 10);
      }
  */
}