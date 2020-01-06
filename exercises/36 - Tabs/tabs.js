class TabList {
  constructor() {
    this.observeTabButtons();
  }

  // Get Tabs
  get tabsContainer() {
    return document.querySelector('[data-js="tabsContainer"]');
  }
  // Get Buttons
  get tabButtons() {
    return this.tabsContainer.querySelectorAll(`[data-js="tabButton"]`);
  }

  get tabPanels() {
    return this.tabsContainer.querySelectorAll('[data-js="tabPanel"]');
  }

  // Listen To Tab Buttons
  observeTabButtons() {
    this.tabButtons.forEach(this.observeTabButton.bind(this));
  }

  observeTabButton(tabButton) {
    tabButton.addEventListener("click", this.handleTabClick.bind(this));
  }

  // Handle Tab Button Clicks
  handleTabClick(event) {
    this.hideAllTabPanels();
    this.unselectAllTabs();
    this.selectTab(event.currentTarget);
    const tabPanel = this.tabsContainer.querySelector(
      `[aria-labelledby="${event.currentTarget.id}"]`
    );
    this.showSelectedTabPanel(tabPanel);
  }

  // Actions
  // Hide All Tab Panels
  hideAllTabPanels() {
    this.tabPanels.forEach(panel => {
      panel.hidden = true;
    });
  }
  // Mark All Tabs As Unselected
  unselectAllTabs() {
    this.tabButtons.forEach(button =>
      button.setAttribute("aria-selected", false)
    );
  }
  // Mark Clicked Tab as Selected
  selectTab(tabButton) {
    tabButton.setAttribute("aria-selected", true);
  }
  // Find The Associated TabPanel and Show It
  showSelectedTabPanel(tabPanel) {
    tabPanel.hidden = false;
  }
}

new TabList();
