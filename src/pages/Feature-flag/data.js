const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showTreeView: false,
  showTabs: true,
};

function featureFlagsDataServiceCall() {
  
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error eccured! Please Try again");
  });
}

export default featureFlagsDataServiceCall;
