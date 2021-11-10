// const isPerson = (object:any): object is Person => "address" in object;

const isPerson = (object: any): object is Person => !!object && object.disconnector === 'person'