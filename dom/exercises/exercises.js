/*
  06
  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  
    página, através da classe dele;
  - Exiba a referência do título principal no console.
  <section>
    <article>
      <h1 class="main-title">Curiosidades sobre o filme Jurassic Park</h1>
      <ul>
        <li>
          <h2 class="secondary-title">Direto das páginas do livro</h2>
          <p>No livro Parque dos Dinossauros, de Michael Crichton, o personagem John Hammond anuncia orgulhoso que o guia turístico do parque é o ator Richard Kiley, conhecido nos Estados Unidos. No filme, o diretor Steven Spielberg convidou o próprio Kiley para interpretar a si mesmo nesta cena.</p>
        </li>
        <li>
          <h2 class="secondary-title">Passou adiante</h2>
          <p>O ator William Hurt chegou a ser convidado para interpretar o Dr. Alan Grant, mas recusou o papel sem nem mesmo ler o roteiro original do filme.</p>
        </li>
        <li>
          <h2 class="secondary-title">Sistemas operacionais do parque</h2>
          <p>Nos diversos softwares que aparecem em Jurassic Park foram utilizadas várias linguagens. Pode-se notar que um dos programas utilizados no parque foi escrito em Pascal, em um dos monitores percebe-se a utilização do sistema UNIX e a interface gráfica utilizada é a 3D File System Navigator, da Sillicon Graphics.</p>
        </li>
      </ul>
    </article>
  </section>
*/
const mainTitle = document.querySelector(".main-title");
console.log(mainTitle);

/*
  07
  - Obtenha um NodeList com as referências de todos os títulos secundários da  
    página, através da classe deles;
  - Exiba esse NodeList no console.
*/

const secondaryTitles = document.querySelectorAll(".secondary-title");
console.log(secondaryTitles);
