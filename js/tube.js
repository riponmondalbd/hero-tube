// get and set categories start
// get categories
const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const catagories = data.data;
  showCategory(catagories);
  //   console.log(id);
};

// set categories
const showCategory = (catagories) => {
  // get category container
  const categoryContainer = document.getElementById("catagories-container");
  catagories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button
        onclick="loadSingleCategory('${category.category_id}')"
        class="text-lg font-semibold text-[#252525] rounded px-5 py-2 bg-[#25252533]"
      >
        ${category.category}
      </button>
      `;
    //   set category to ui
    categoryContainer.appendChild(categoryDiv);
    // console.log(category);
  });
};
// get and set categories start

// get and set single category start
// get single category
const loadSingleCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const singleCategory = data.data;
  showSingleCategory(singleCategory);
};

// set single category
const showSingleCategory = (singleCategory) => {
  const noneIcon = document.getElementById("none-icon");

  if (singleCategory.length === 0) {
    noneIcon.classList.remove("hidden");
  } else {
    noneIcon.classList.add("hidden");
  }

  const singleCategoryContainer = document.getElementById(
    "single-category-container"
  );
  singleCategoryContainer.innerText = "";

  singleCategory.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList = "card card-compact";

    // get time

    const inputSeconds = parseInt(category?.others?.posted_date);
    const time = convertSecondsToTime(inputSeconds);

    categoryDiv.innerHTML = `
          <div>
              <img class='h-[206px] w-[366px] rounded-lg'
                src="${category?.thumbnail}"
              />
              </div>
              <div class="absolute bottom-[120px] right-0 text-white pr-3 pb-2">
                        ${
                          time.hours || time.minutes
                            ? `
                        <span class="border-solid border-black border rounded-md bg-[#171717] text-xs p-1">
                            ${time.hours} hrs ${time.minutes} min 
                        </span>`
                            : ""
                        }
                </div>
              
              
            <div class='mt-5'>
                <div class='flex items-start gap-3'>
                    <img class='w-[40px] h-[40px] rounded-full'
                    src="${category.authors[0].profile_picture}"
                    /> 
                    <div>
                        <h3 class='text-base font-bold mb-[9px]'>${
                          category.title
                        }</h3>
                        <p class='flex items-center gap-[9px]'>${
                          category.authors[0].profile_name
                        } ${
      category.authors[0]?.verified === true
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_13_1000)">
                                    <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                                    <path d="M12.7093 7.20637L9.14053 10.7751L7.29053 8.92668C6.88897 8.52512 6.2374 8.52512 5.83584 8.92668C5.43428 9.32824 5.43428 9.97981 5.83584 10.3814L8.43115 12.9767C8.82178 13.3673 9.45615 13.3673 9.84678 12.9767L14.1624 8.66106C14.564 8.25949 14.564 7.60793 14.1624 7.20637C13.7608 6.80481 13.1108 6.80481 12.7093 7.20637Z" fill="#FFFCEE"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13_1000">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>`
        : ""
    } </p>
                <p class='mt-[10px]'> ${category.others.views}</P>
                    </div>
                </div>
              
            </div>
        `;
    singleCategoryContainer.appendChild(categoryDiv);
  });
  //   console.log(singleCategory);
};
// get and set single category end

// time calculation
function convertSecondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  return {
    hours: hours,
    minutes: minutes,
  };
}

loadCategory();
loadSingleCategory(1000);
