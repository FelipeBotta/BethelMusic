    class Album extends HTMLElement{
        constructor(){
            super();

            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(this.build());
            shadow.appendChild(this.styles());
        }

        connectedCallback() {
            const titulo = this.getAttribute("titulo");
            const autor = this.getAttribute("autor");
            const ano = this.getAttribute("ano");
            const foto = this.getAttribute("foto");
            const estilo = this.getAttribute("estilo");
        
            this.shadowRoot.querySelector(".titulo").textContent = titulo;
            this.shadowRoot.querySelector(".autor").textContent = autor;
            this.shadowRoot.querySelector(".ano").textContent = ano;
            this.shadowRoot.querySelector(".cover img").src = foto;
            this.shadowRoot.querySelector(".estilo").textContent = estilo;
        }
        


        build() {
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "container");
        
            const cover = document.createElement("div");
            cover.setAttribute("class", "cover");
        
            const albuum = document.createElement("img");
            albuum.src = this.getAttribute("foto");
            albuum.alt = "Foto do album";
            cover.appendChild(albuum);
        
            const botoes = document.createElement("div");
            botoes.setAttribute("class", "botoes");
        
            const listenButton = document.createElement("button");
            listenButton.setAttribute("class", "listen");
            listenButton.textContent = "Listen Now";
        
            const resourcesButton = document.createElement("button");
            resourcesButton.setAttribute("class", "resources");
            resourcesButton.textContent = "View Other Albuns";
        
            botoes.appendChild(listenButton);
            botoes.appendChild(resourcesButton);
        
            const conteudo = document.createElement("div");
            conteudo.setAttribute("class", "conteudo");
        
            const titulo = document.createElement("h1");
            titulo.setAttribute("class", "titulo");
        
            const autor = document.createElement("p");
            autor.setAttribute("class", "autor");
        
            const ano = document.createElement("p");
            ano.setAttribute("class", "ano");
            
            const estilo = document.createElement("p");
            estilo.setAttribute("class", "estilo");
        
            conteudo.appendChild(titulo);
            conteudo.appendChild(autor);
            conteudo.appendChild(estilo);
            conteudo.appendChild(ano);
        
            componentRoot.appendChild(cover);
            componentRoot.appendChild(conteudo);
            componentRoot.appendChild(botoes);
        
            return componentRoot;
        }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .cover{
            display: flex;
            padding: 1rem;
            margin-bottom: -1rem;
        }

        .conteudo{
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }
        
        .conteudo .titulo{
            font-family: Arial, Helvetica, sans-serif;
            font-size: .75rem;
            font-weight: bolder;
        }
        
        .conteudo > p{
            font-family: Arial, Helvetica, sans-serif;
            font-size: .5rem;
            font-weight: bold;
            margin-bottom: .5rem;
        }
        
        .conteudo .ano{
            color: grey;
        }
        
        .botoes{
            display: flex;
            flex-direction: row;
            padding: 0 1rem;
            gap: 1rem;
        }
        
        .botoes .listen{
            background-color: rgba(0, 255, 255, 0);
            border: .5px solid black;
            border-radius: 16px;
            padding: 5px 10px;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            font-size:10px;
        }
        
        .botoes .resources{
            background-color: rgba(0, 255, 255, 0);
            border: .5px solid black;
            border-radius: 16px;
            padding: 5px 10px;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            font-size:10px;
        }

        .estilo{
            color:grey;

        }

        `
    ;
        return style;

    }
}

customElements.define("album-component", Album);
