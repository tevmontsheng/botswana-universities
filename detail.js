const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const uni = universities.find((u) => u.id === id);
const detailCard = document.getElementById("detail-card");
const detailHero = document.getElementById("detail-hero");

if (!uni) {
  detailCard.innerHTML = `
    <div class="not-found">
      <h2>University not found</h2>
      <p>The university you're looking for doesn't exist.</p>
      <a href="index.html" class="visit-btn">Back to Universities</a>
    </div>
  `;
} else {
  document.title = `${uni.name} - Universities in Botswana`;
  detailHero.style.setProperty("--accent", uni.color);
  detailCard.style.setProperty("--uni-color", uni.color);

  detailCard.innerHTML = `
    <div class="detail-accent" style="background: ${uni.color}"></div>
    <div class="detail-header">
      <div class="detail-logo-wrap" style="background-color: color-mix(in srgb, ${uni.color} 10%, white); border: 2px solid color-mix(in srgb, ${uni.color} 20%, white)">
        <img
          src="${uni.logo}"
          alt="${uni.name} logo"
          class="detail-logo-img"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
        />
        <span class="detail-logo-fallback" style="display:none; background-color: ${uni.color}">${uni.abbreviation}</span>
      </div>
      <div class="detail-title-area">
        <span class="badge ${uni.type.toLowerCase()}">${uni.type}</span>
        <h1>${uni.name}</h1>
        <p class="detail-abbr">${uni.abbreviation}</p>
      </div>
    </div>

    <div class="detail-info-grid">
      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <p class="info-label">Location</p>
          <p class="info-value">${uni.location}, Botswana</p>
        </div>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div>
          <p class="info-label">Established</p>
          <p class="info-value">${uni.established}</p>
        </div>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <div>
          <p class="info-label">Type</p>
          <p class="info-value">${uni.type} University</p>
        </div>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div>
          <p class="info-label">Website</p>
          <p class="info-value"><a href="${uni.website}" target="_blank" rel="noopener">${uni.domain}</a></p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>About</h2>
      <p>${uni.description}</p>
    </div>

    <div class="detail-section">
      <h2>Programmes & Faculties</h2>
      <div class="programs-grid">
        ${uni.programs.map((p) => `<span class="program-tag">${p}</span>`).join("")}
      </div>
    </div>

    <a href="${uni.website}" target="_blank" rel="noopener" class="visit-btn" style="background-color: ${uni.color}">
      Visit Official Website &rarr;
    </a>
  `;
}
