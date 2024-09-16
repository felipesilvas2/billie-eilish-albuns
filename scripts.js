document.addEventListener('DOMContentLoaded', function () {
    const albums = document.querySelectorAll('.album');
    const body = document.body;

    // Função para adicionar efeito de animação ao card
    function addCardAnimation(album) {
        album.addEventListener('mouseover', function () {
            // Atualiza a cor de fundo com base no álbum
            const albumId = album.id;
            if (albumId === 'album1') {
                body.style.backgroundColor = '#004d40'; // Verde escuro
            } else if (albumId === 'album2') {
                body.style.backgroundColor = '#d4a15b'; // Bege escuro
            } else if (albumId === 'album3') {
                body.style.backgroundColor = '#003366'; // Azul escuro
            }
        });

        album.addEventListener('mouseout', function () {
            body.style.backgroundColor = 'initial';
        });

        album.addEventListener('click', function () {
            album.classList.add('clicked');
            setTimeout(() => album.classList.remove('clicked'), 600);
        });
    }

    // Inicializa animação para cada álbum
    albums.forEach(album => addCardAnimation(album));

    // Remove rotação do título
    document.querySelector('header h1').style.transform = `translateY(0)`;

    // Efeito de paralaxe no fundo
    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        body.style.backgroundPositionY = `${scrollTop * 0.5}px`;
    });

    // Efeito de brilho ao clicar no menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetAlbum = document.querySelector(this.getAttribute('href'));

            if (targetAlbum) {
                targetAlbum.scrollIntoView({ behavior: 'smooth' });
                targetAlbum.classList.add('highlighted');
                setTimeout(() => targetAlbum.classList.remove('highlighted'), 800);
            }
        });
    });

    // Adiciona efeito de destaque ao álbum ao clicar no menu
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        .highlighted {
            box-shadow: 0 0 20px rgba(255, 204, 0, 0.8);
            transition: box-shadow 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);

    // Animação adicional para os álbuns com classe 'clicked'
    const styleSheetClicked = document.createElement('style');
    styleSheetClicked.type = 'text/css';
    styleSheetClicked.innerText = `
        .clicked {
            animation: cardClickAnimation 0.6s ease;
        }

        @keyframes cardClickAnimation {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(styleSheetClicked);
});
