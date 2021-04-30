function changeOuterLinks() {

  const links = document.querySelectorAll('nav#link-list a');
    links.forEach( l => {
        if (l.innerHTML.includes('outer-link')) {
            l.target='_blank';
            l.innerHTML = `<strong>${l.innerHTML}</strong>`;
        }
    });

    const n = document.querySelectorAll("nav");
    n.forEach((l) => {
       l.style.display = "flex";
       l.style.flexDirection = "column";
       l.style.margin = "0px auto";
       l.style.width = "30%";
       l.style.border = "1px solid blue";
       l.style.padding = "16px";
  });
        

}


export { changeOuterLinks };