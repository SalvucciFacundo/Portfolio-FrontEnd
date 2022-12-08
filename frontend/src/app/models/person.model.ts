export class Person {
  id?: number;
  name?: string;
  lastName?: string;
  birth?: string;
  title?: string;
  email?: string;
  phone?: number;
  nationality?: string;
  aboutMe?: string;
  bannerUrl?: string;
  profileUrl?: string;

  constructor(
    name: string,
    lastName: string,
    birth: string,
    title: string,
    email: string,
    phone: number,
    nationality: string,
    aboutMe: string,
    bannerUrl: string,
    profileUrl: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.birth = birth;
    this.title = title;
    this.email = email;
    this.phone = phone;
    this.nationality = nationality;
    this.aboutMe = aboutMe;
    this.bannerUrl = bannerUrl;
    this.profileUrl = profileUrl;
  }
}
