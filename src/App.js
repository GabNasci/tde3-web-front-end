import './App.css';



function App() {

    function metalPipe() {
        const audio = new Audio('imgs/metal-pipe.mp3');
        setTimeout(() => {
            audio.play();
        }, 650)
        document.getElementById('imagem').style.top = '612px';
        setTimeout(() => {
            document.getElementById('imagem').style.display = 'none';
        }, 4000)

    }

    return (
        <div>
            <img id="imagem" src="imgs/marmelo.jpg" alt="" />
            <section className="banner">
                <img className="banner_logo" src="imgs/logo.png" alt="" />
                <div className='banner__texts'>
                    <h2>Batendo na concorrência com qualidade e força!</h2>
                    <p>Bem-vindo à “Hemmer HammerShopp”, o HammerShop da família Hemmer, a loja especializada em tudo relacionado a martelos! Se você está procurando o martelo perfeito para qualquer tarefa, você veio ao lugar certo. Nossa ampla seleção abrange desde martelos de brinquedo para os pequenos construtores até robustos martelos de construção para os profissionais.</p>
                    <a className='banner_btn' href="#" id='botao' onClick={metalPipe}>Saiba mais</a>
                </div>
            </section>
            <main>
                <section className='plano'>
                    <h1>Contrate nosso plano</h1>
                    <h2>Apenas R$200,90</h2>
                    <p>
                        Se você é um entusiasta de martelos ou um profissional que trabalha com eles diariamente, nosso Plano Mensal é perfeito para você!
                    </p>
                    <div className='plano_beneficios'>
                        <div>
                            <img src="imgs/gavel-solid.svg" alt="" />
                            <p>
                                <strong>Martelos Personalizados</strong>
                                Todo mês, você receberá um martelo personalizado de acordo com suas preferências. Escolha o tamanho, o material do cabo e o tipo de cabeça que melhor se adequam ao seu trabalho.
                            </p>
                        </div>
                        <div>
                            <img src="imgs/youtube.svg" alt="" />
                            <p>
                                <strong>Dicas e Tutoriais</strong>
                                Receba dicas úteis sobre como usar diferentes tipos de martelos de maneira eficiente. Nossos especialistas compartilharão tutoriais práticos para aprimorar suas habilidades.
                            </p>
                        </div>
                        <div>
                            <img src="imgs/crown-solid.svg" alt="" />
                            <p>
                                <strong>Eventos VIP</strong>
                                Participe de eventos exclusivos para assinantes, como demonstrações de novos produtos, workshops e encontros com outros amantes de martelos.
                            </p>
                        </div>

                    </div>
                </section>
            </main>

        </div>
    );
}

export default App;
