import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Tabs } from "tns-core-modules/ui/tabs";

export function goToFirst(args: EventData) {
  console.log("---> goToFirst");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("bottomNav");

  tabsNav.selectedIndex = 0;
}

export function goToSecond(args: EventData) {
  console.log("---> goToSecond");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("bottomNav");

  tabsNav.selectedIndex = 1;
}

export function goToThird(args: EventData) {
  console.log("---> goToThird");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("bottomNav");

  tabsNav.selectedIndex = 2;
}

export function onFirstTabStripItemTap(args: EventData) {
  console.log("---> onFirstTabStripItemTap");
  console.log("---> args.object", args.object);
}

export function onSecondTabStripItemTap(args: EventData) {
  console.log("---> onSecondTabStripItemTap");
  console.log("---> args.object", args.object);
}

export function onThirdTabStripItemTap(args: EventData) {
  console.log("---> onThirdTabStripItemTap");
  console.log("---> args.object", args.object);
}
