// Smooth Section Navigation Highlight
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});

// دالة فتح صورة الشهادات بحجم كبير
function openModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("imgModalSrc");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
  }
}

// دالة إغلاق صورة الشهادات
function closeModal() {
  var modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// تشغيل فتح الصورة المكبرة فقط عند الضغط على صور الشهادات
document.addEventListener("DOMContentLoaded", function () {
  var certImages = document.querySelectorAll(".project-card img");
  certImages.forEach(function (img) {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      openModal(this);
    });
  });
});

// Open Project Details Modal (فتح مودال التفاصيل)
window.openProjectModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
};

// Close Project Details Modal (إغلاق مودال التفاصيل)
window.closeProjectModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
};

// Close on outside click
window.closeModalOnOutsideClick = function(event, modalId) {
  if (event.target.id === modalId) {
    window.closeProjectModal(modalId);
  }
};