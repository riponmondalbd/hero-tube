const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const catagories = data.data;
  showCategory(catagories);
};

const showCategory = (catagories) => {
  // get category container
  const categoryContainer = document.getElementById("catagories-container");
  catagories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button
        class="text-lg font-semibold text-[#252525] rounded px-5 py-2 bg-[#25252533]"
      >
        ${category.category}
      </button>
      `;
    categoryContainer.appendChild(categoryDiv);
    console.log(category);
  });
};

loadCategory();
