import {
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  Index,
} from 'sequelize-typescript';

import { VehicleAge, VehicleCondition } from '../enum';

@Table({
  timestamps: true,
})
export class Vehicle extends Model<Vehicle> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Index({
    name: 'dealer-code-index',
  })
  @Index({
    name: 'dealer-vin-index',
    type: 'UNIQUE',
  })
  @Column({
    type: DataType.STRING,
  })
  dealerCode: string;

  @Index('vin-index')
  @Index('dealer-vin-index')
  @Column({
    type: DataType.STRING,
  })
  vin: string;

  @Index('make-index')
  @Column({
    type: DataType.STRING,
  })
  make: string;

  @Index('is-removed-from-inventory-index')
  @Column({
    type: DataType.BOOLEAN,
  })
  isRemovedFromInventory: boolean;

  @Index('model-index')
  @Column({
    type: DataType.STRING,
  })
  model: string;

  @Column({
    type: DataType.STRING,
  })
  modelCode: string;

  @Index('year-index')
  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @Column({
    type: DataType.ENUM(VehicleAge.Cpo, VehicleAge.New, VehicleAge.Used),
  })
  age: string;

  @Column({
    type: DataType.STRING,
  })
  bodyType: string;

  @Column({
    type: DataType.STRING,
  })
  color: string;

  @Column({
    type: DataType.STRING,
  })
  colorDescriptive: string;

  @Column({
    type: DataType.STRING,
  })
  colorInterior: string;

  @Column({
    type: DataType.STRING,
  })
  colorInteriorDescriptive: string;

  @Column({
    type: DataType.ENUM(
      VehicleCondition.Average,
      VehicleCondition.Fair,
      VehicleCondition.Good,
      VehicleCondition.Great,
      VehicleCondition.LikeNew,
      VehicleCondition.New,
    ),
  })
  condition: string;

  @Column({
    type: DataType.INTEGER,
  })
  dealerRetailPrice: number;

  @Column({
    type: DataType.INTEGER,
  })
  discount: number;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  engine: string;

  @Column({
    type: DataType.TEXT,
  })
  features: string | string[];

  @Column({
    type: DataType.STRING,
  })
  fuelType: string;

  @Column({
    type: DataType.INTEGER,
  })
  mileage: number;

  @Column({
    type: DataType.INTEGER,
  })
  mpgCity: number;

  @Column({
    type: DataType.INTEGER,
  })
  mpgHighway: number;

  @Column({
    type: DataType.INTEGER,
  })
  msrp: number;

  @Column({
    type: DataType.TEXT,
  })
  photoUrl: string | string[];

  @Index('selling-price-index')
  @Column({
    type: DataType.INTEGER,
  })
  sellingPrice: number;

  @Column({
    type: DataType.STRING,
  })
  transmission: string | string[];

  @Index('trim-index')
  @Column({
    type: DataType.STRING,
  })
  trim: string;

  @Index('created-at-index')
  @CreatedAt
  readonly createdAt!: Date;

  @Index('updated-at-index')
  @UpdatedAt
  readonly updatedAt!: Date;
}
