const grid = document.getElementById("university-grid");
const countText = document.getElementById("count-text");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentFilter = "All";

function renderCards(filter) {
  const filtered =
    filter === "All"
      ? universities
      : universities.filter((u) => u.type === filter);

  grid.innerHTML = filtered
    .map(
      (uni) => `
    <a href="university.html?id=${uni.id}" class="card" style="--uni-color: ${uni.color}">
      <div class="card-accent" style="background: ${uni.color}"></div>
      <div class="card-logo">
        <img
          src="${uni.logo}"
          alt="${uni.name} logo"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
        />
        <span class="logo-fallback" style="display:none">${uni.abbreviation}</span>
      </div>
      <div class="card-body">
        <span class="badge ${uni.type.toLowerCase()}">${uni.type}</span>
        <h3 class="card-title">${uni.name}</h3>
        <div class="card-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${uni.location}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Est. ${uni.established}
          </span>
        </div>
        <p class="card-desc">${uni.description.substring(0, 100)}...</p>
        <span class="view-btn">View Details &rarr;</span>
      </div>
    </a>
  `
    )
    .join("");

  countText.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "university" : "universities"}`;
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards(currentFilter);
  });
});

renderCards(currentFilter);
