import type { ReactElement } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClassese = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
