(function ProgressIndicators(doc) {
  const progress = doc.querySelector(".progress");
  const controls = doc.querySelector(".controls");
  const indicators = progress.querySelectorAll(".indicator");
  const nextButton = controls.querySelector(".next");
  const previousButton = controls.querySelector(".previous");

  // state
  let activeIndex = 0;
  const stepsPercenage = 100 / (indicators.length - 1);

  controls.addEventListener("click", handleClick);

  function handleDisabledButtons() {
    const lastItem = indicators.length - 1;

    switch (activeIndex) {
      case 0:
        previousButton.disabled = true;
        break;
      case lastItem:
        nextButton.disabled = true;
        break;
      default:
        previousButton.disabled = false;
        nextButton.disabled = false;
    }
  }

  function handleProgressBar() {
    // Set the custom property that is controlling the scaleX of this element
    progress.style.setProperty("--step", `${stepsPercenage * activeIndex}%`);
  }

  function handleClick(e) {
    const classNames = e.target.classList;

    if (classNames.contains("next")) {
      if (activeIndex === indicators.length - 1) return;

      activeIndex += 1;

      handleDisabledButtons();

      handleProgressBar();

      indicators[activeIndex].classList.add("active");

      return;
    }

    if (classNames.contains("previous")) {
      if (activeIndex === 0) return;

      // Remove active class before updating activeIndex state
      indicators[activeIndex].classList.remove("active");

      activeIndex -= 1;

      handleProgressBar();

      handleDisabledButtons();

      return;
    }
  }
})(document);
