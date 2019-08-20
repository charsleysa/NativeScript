import { EventData } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { Page } from "tns-core-modules/ui/page";
import { SelectedIndexChangedEventData, Tabs, TabStripItem } from "tns-core-modules/ui/tabs";

export function goToFirst(args: EventData) {
  console.log("---> goToFirst");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("tabsNav");
  tabsNav.selectedIndex = 0;
}

export function goToSecond(args: EventData) {
  console.log("---> goToSecond");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("tabsNav");
  tabsNav.selectedIndex = 1;
}

export function goToThird(args: EventData) {
  console.log("---> goToThird");
  const page = <Page>(<any>args.object).page;
  const tabsNav = <Tabs>page.getViewById("tabsNav");
  tabsNav.selectedIndex = 2;
}

export function onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
  console.log("---> onSelectedIndexChanged", args.eventName);
  console.log("---> oldIndex", args.oldIndex);
  console.log("---> newIndex", args.newIndex);
}

export function onItemTap() {
  console.log("---> onItemTap");
}

export function onFirstTabStripItemTap(args: EventData) {
  console.log("---> onFirstTabStripItemTap", args.eventName);
  console.log("---> onFirstTabStripItemTap", args.object);
  const tabStripItem = <TabStripItem>args.object;

  const page = tabStripItem.page;
  const frame = <Frame>page.getViewById("frame");
  const tabs = <Tabs>page.getViewById("tabsNav");
  console.log("---> tabs.selectedIndex", tabs.selectedIndex);

  if (tabs.selectedIndex === 0 && frame.canGoBack()) {
    frame.goBack();
  }
}

export function onSecondTabStripItemTap(args: EventData) {
  console.log("---> onSecondTabStripItemTap", args.eventName);
}

export function onThirdTabStripItemTap(args: EventData) {
  console.log("---> onThirdTabStripItemTap", args.eventName);
}
