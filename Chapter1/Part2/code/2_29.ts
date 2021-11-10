// const isPerson2_29 = (object: any): object is Person => !!object && 'address'in object;

const isPerson2_29 = (object: any): object is Person => !!object && object.disconnector === 'person'