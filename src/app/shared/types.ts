export interface Device {
  name: string;
  buyingDate: Date;
  buyingPrice: number;
}

export interface HalPaginatedDevice {
  _embedded: {
    device: Device[];
  };
}
