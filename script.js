// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Objeto contendo dados extras sobre as árvores para interatividade
    const fatosArvores = {
        ipe: {
            titulo: "Ipê-Amarelo",
            curiosidade: "Os ipês perdem quase todas as suas folhas antes de florescerem. É uma estratégia para economizar água e destacar as flores para os polinizadores!"
        },
        paubrasil: {
            titulo: "Pau-Brasil",
            curiosidade: "O corante vermelho extraído do seu tronco era altamente valorizado na Europa para tingir tecidos de luxo da realeza."
        },
        araucaria: {
            titulo: "Araucária",
            curiosidade: "Também conhecida como Pinheiro-do-Paraná, ela conviveu com os dinossauros no período Jurássico e suas sementes (pinhões) alimentam a fauna local."
        }
    };

    // Seleciona todos os cards de árvores
    const cards = document.querySelectorAll(".card");

    // Adiciona o evento de clique a cada card
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const tipoArvore = card.getAttribute("data-tree");
            const info = fatosArvores[tipoArvore];

            if (info) {
                // Exibe uma mensagem bonita com os dados extras (pode ser evoluído para um Modal)
                alert(`🌲 Curiosidade sobre o ${info.titulo}:\n\n${info.curiosidade}`);
            }
        });
    });
});
