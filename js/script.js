if (window.SimpleSlide) {

    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"
        time: 5000 // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true
    });

}

if (window.SimpleAnime) {
    new SimpleAnime();
}


if (window.SimpleForm) {
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'><h2>Ops! Erro ao enviar</h2><p>Um erro ocorreu, tente para o email corretora@betaniasouza.com.</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
    });
}


var $menuHamburguer = document.querySelector('.menu-hamburguer'),
    $spanHamburguer = document.querySelector('.span-hamburguer')
$spanMenu = document.querySelector('.span-menu')
$menu = document.querySelector('.header_menu');

$menuHamburguer.addEventListener('click', function() {
    this.classList.toggle('active');
    $menu.classList.toggle('active');


})