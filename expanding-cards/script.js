(function Cards(doc) {
  const CLASS_NAME = "active";
  const cards = doc.querySelectorAll(".card");

  cards.forEach((card) => card.addEventListener("click", handleClick));

  function handleClick(e) {
    // Removes the active class from all card elements,
    // adds the active class to the element that was clicked

    cards.forEach((card) => card.classList.remove(CLASS_NAME));
    e.currentTarget.classList.add(CLASS_NAME);
  }
})(document);
