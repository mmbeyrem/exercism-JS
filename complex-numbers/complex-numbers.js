export class ComplexNumber {
  constructor(real, imaginary) {
    this.realPart = real;
    this.imaginaryPart = imaginary;
  }

  get real() {
    return this.realPart;
  }

  get imag() {
    return this.imaginaryPart;
  }

  add(c) {
    return new ComplexNumber(this.realPart + c.realPart, this.imaginaryPart + c.imaginaryPart);
  }

  sub(c) {
    return new ComplexNumber(this.realPart - c.realPart, this.imaginaryPart - c.imaginaryPart);
  }

  div(c) {
    const dividor = ((c.realPart **2) + (c.imaginaryPart **2 ));
    return new ComplexNumber(((this.realPart * c.realPart) + (this.imaginaryPart * c.imaginaryPart))/dividor ,
                             ((this.imaginaryPart * c.realPart) - (this.realPart * c.imaginaryPart))/dividor);
  }
  mul(c) {
    return new ComplexNumber((this.realPart * c.realPart) - (this.imaginaryPart * c.imaginaryPart),
     (this.imaginaryPart * c.realPart) + (this.realPart * c.imaginaryPart));
  }

  get abs() {
    return (this.realPart ** 2 + this.imaginaryPart ** 2) ** (1/2);
  }

  get conj() {
    return  new ComplexNumber(this.realPart,0 + (this.imaginaryPart * (-1)));
  }

  get exp() {
     return new ComplexNumber(Math.exp(this.realPart) * Math.cos(this.imaginaryPart),
                              Math.exp(this.realPart) * Math.sin(this.imaginaryPart));
  }
}
