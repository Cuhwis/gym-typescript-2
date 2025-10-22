import type { ReactElement } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClassese = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: ReactElement;
  title: string;
  description: string;
}
