import { CountryTax } from './country_tax';
import { Entity } from '../entity';
import { Invoice } from './invoice';

export class Item extends Entity {
  protected static resourceName: string = "items";
  protected static singularName: string = "item";
  protected static pluralName: string = "items";

  @Item.property()
  public archived?: Date | null;

  @Item.property()
  public id?: number;

  @Item.property()
  public quantity?: number | null;

  @Item.property()
  public description?: string;

  @Item.property()
  public cost?: number;

  @Item.property()
  public taxAmount?: number | null;

  @Item.property()
  public taxType?: CountryTax | null;

  @Item.property()
  public invoice?: Invoice | null;
}