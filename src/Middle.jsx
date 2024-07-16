import React, { useState } from 'react'
import '../src/Middle.css'

function Middle (){

    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isResponse, setResponse] = useState (false)

    function mostrarResposta(){
        setOpen(old => !old)
    }

    function mostrarResposta2(){
        setOpen2 (old => !old)
    }
    function mostrarResposta3 (){
        setResponse(old => !old)
    }
    return(
        <>
        <main className="container">
            <div className="container_text">
                <section className="middle_left">
                    <div className="texts">
                    <h2>O que são Sistemas de Informação Inteligentes?</h2>
                    <p className="paragraph">
                    Os sistemas de informação Inteligentes, tornaram-se essenciais em nossa vida contidiana. 
                    Por serem sofisticados, esses sistemas são alimentados por (IA), e também contam com aprendizado de máquinas.
                    À medida que a inteligência artificial e a aprendizagem automática continuam a avançar a passos largos, compreender estes sistemas é crucial para aproveitar ao máximo as oportunidades que oferecem e enfrentar os desafios que apresentam no século XXI.
                    </p>
                    <div className="image_content">
                        <div id="image_2"></div>
                    </div>
                    <ol>
                        <h2>
                            <li>
                            Introdução aos sistemas Inteligentes:
                            Definições e conceitos fundamentais
                            </li>
                        </h2>
                        <p className="paragraph">
                        Um sistema inteligente é aquele que consegue perceber, compreender, raciocinar e tomar decisões com base em uma série de dados coletados e analisados. 
                        Esses sistemas utilizam algoritmos e modelos matemáticos para processar informações e oferecer soluções ou respostas de forma autônoma.
                        <p className='paragraph'>
                        Existem várias definições e conceitos fundamentais que é importante ter em mente ao entrar no campo dos sistemas inteligentes. 
                        Alguns desses conceitos incluem aprendizado de máquina, que é a capacidade de uma máquina melhorar seu desempenho por meio da experiência; 
                        inteligência artificial, que se refere à criação de sistemas capazes de simular o raciocínio humano; e mineração de dados, que consiste em extrair informações valiosas de grandes conjuntos de dados.
                        </p>
                        </p>
                        <h2>
                            <li>
                            Principais características dos sistemas inteligentes:
                            Adaptabilidade e aprendizado de máquina
                            </li>
                        </h2>
                        <p className="paragraph">
                        As principais características dos sistemas inteligentes, como a adaptabilidade e a aprendizagem automática, são críticas para o seu funcionamento eficiente e eficaz. 
                        A adaptabilidade permite que sistemas inteligentes se ajustem e respondam às mudanças no seu ambiente, permitindo-lhes manter uma alto rendimento mesmo em situações variáveis. 
                        Esta adaptabilidade pode ser especialmente útil em aplicações em tempo real, onde as condições podem mudar rapidamente.
                        </p>
                        <h2>
                            <li>
                            Aplicações de sistemas inteligentes em diferentes indústrias
                            </li>
                        </h2>
                        <p className="paragraph">
                        Os sistemas inteligentes estão provando ser uma ferramenta valiosa em diversas indústrias, fornecendo soluções inovadoras e eficientes para problemas complexos. 
                        Uma das principais aplicações destes sistemas é no setor da saúde. Sistemas de inteligência artificial são utilizados para diagnóstico médico, ajudando os profissionais a identificar doenças e avaliar imagens médicas com mais precisão. 
                        Além disso, estão sendo desenvolvidas aplicações que utilizam algoritmos de aprendizado de máquina para prever doenças e melhorar a eficiência dos tratamentos.
                        </p>
                    <div className="image_content">
                        <div id='image'>
                        </div>
                    </div>
                    <h2>
                            <li>
                            Principais componentes de um sistema inteligente
                            </li>
                        </h2>
                        <p className="paragraph">
                        Os sistemas inteligentes, são formados por componentes diferentes, que trabalham juntos para a maior eficiência do sistema. Abaixo são listados os compontentes:
                        </p>
                        <p>
                            <ol className='marcacao'>
                                <li>Algoritmos de aprendizado de máquina: Algoritmos de aprendizado de máquina são um dos componentes mais críticos dos sistemas inteligentes. </li>
                                <li>Sensores: Sensores são essenciais para que sistemas inteligentes possam interagir com seu ambiente.</li>
                                <li>Arquitetura de hardware e software: A arquitetura de hardware e software refere-se à estrutura geral do sistema inteligente.</li>
                            </ol>
                        </p>
                        <h2>
                            <li>
                            As vantagens e desafios da implementação de sistemas inteligentes
                            </li>
                        </h2>
                        <p className="paragraph">
                        A implementação de sistemas inteligentes numa organização pode proporcionar inúmeras vantagens, mas também pode apresentar desafios a considerar. 
                        Os sistemas inteligentes utilizam algoritmos e técnicas avançadas para auxiliar na tomada de decisões. Esses sistemas são projetados para analisar grandes quantidades de dados e extrair informações relevantes que podem ser usadas para tomar decisões informadas. Uma das principais vantagens dos sistemas inteligentes é a sua capacidade de aprender e se adaptar à medida que recebem mais informações.
                        </p>
                        <p className="paragraph">
                        No entanto, a implementação de sistemas inteligentes também enfrenta desafios significativos. 
                        Uma delas é a coleta e gestão de dados relevantes. Estes sistemas requerem grandes volumes de dados para gerar resultados precisos, por isso é importante ter uma estratégia sólida para coletar, armazenar e proteger os dados. 
                        </p>
                        <h2>
                            <li>
                            Exemplos de sistemas de informação inteligentes
                            </li>
                        </h2>
                        <div className="exemplos">
                            <div className="exemplo">
                            <p>1. Medicina personalizada</p>
                            <div className="espaco_medicina">
                            </div>
                            </div>
                            <div className="exemplo">
                            <p>2. Inspeção visual de equipamentos</p>
                            <div className="espaco_equipamento">
                            </div>
                            </div>
                            <div className="exemplo">
                            <p>3. Carros autônomos</p>
                            <div className="espaco_carro">
                            </div>
                            </div>
                        </div>
                    </ol>
                    </div>

                    <div className="bottom">
                        <div className="referencias">
                            <p>
                                <b>REFERÊNCIAS</b>
                            </p>
                            <p>
                                REZENDE, S. <b>Sistemas inteligentes: </b>Fundamentos e aplicações. Barueri - SP: Monole, 2005.
                            </p>
                        </div>
                    </div>
                    <div className="perguntas">
                        <p>
                            <b>PERGUNTAS</b>
                        </p>
                        <div className="card_perguntas">
                            <h4>
                            1. Qual das alternativas descreve corretamente um sistema inteligente?
                            </h4>
                            <p>
                            A) Um sistema inteligente é aquele que consegue apenas processar informações de forma autônoma.
                            </p>
                            <p>
                            B) Um sistema inteligente é aquele que consegue perceber, compreender, raciocinar e tomar decisões com base em dados coletados e analisados.
                            </p>
                            <p>
                            C) Um sistema inteligente é aquele que utiliza algoritmos e modelos matemáticos apenas para coletar dados.
                            </p>
                            <p>
                            D) Um sistema inteligente é aquele que toma decisões sem necessidade de análise de dados.
                            </p>
                            <div className={`resposta ${isOpen && "show"}`}>
                                <p>
                                Resposta correta: B) Um sistema inteligente é aquele que consegue perceber, compreender, raciocinar e tomar decisões com base em dados coletados e analisados.
                                </p>
                            </div>
                            <div className="button" onClick={mostrarResposta}>
                                <button>
                                    Mostrar resposta
                                </button>
                            </div>
                        </div>
                        <div className="card_perguntas">
                            <h4>
                            2. Qual dos componentes abaixo NÃO é mencionado como essencial para sistemas inteligentes no texto?
                            </h4>
                            <p>
                            A) Algoritmos de aprendizado de máquina.
                            </p>
                            <p>
                            B) Sensores.
                            </p>
                            <p>
                            C) Arquitetura de hardware e software.
                            </p>
                            <p>
                            D) Redes de comunicação avançadas.
                            </p>
                            <div className={`resposta2 ${isOpen2 && "show"}`}>
                                <p>
                                Resposta correta: D) Redes de comunicação avançadas
                                </p>
                            </div>
                            <div className="button" onClick={mostrarResposta2}>
                                <button>
                                    Mostrar resposta
                                </button>
                            </div>
                        </div>
                        <div className="card_perguntas">
                            <h4>
                            3. Qual é uma das principais vantagens dos sistemas inteligentes na tomada de decisões?
                            </h4>
                            <p>
                            A) Eles eliminam a necessidade de coleta de dados.
                            </p>
                            <p>
                            B) Eles utilizam técnicas de visualização de dados para exibir informações de forma mais compreensível.
                            </p>
                            <p>
                            C) Eles não precisam se adaptar a novas informações.
                            </p>
                            <p>
                            D) Eles dependem exclusivamente de dados históricos para gerar conclusões.
                            </p>
                            <div className={`resposta3 ${isResponse && "show"}`}>
                            <p>
                            Resposta correta: B) Eles utilizam técnicas de visualização de dados para exibir informações de forma mais compreensível.
                            </p>
                            </div>
                            <div className="button" onClick={mostrarResposta3}>
                                <button>
                                    Mostrar resposta
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="middle_right">
                    <div className="card_topicos">
                        <h3>Tópicos</h3>
                        <p>O que são sistemas de informação Inteligentes</p>
                        <ol>
                            <li><a href=""><p>
                                Introdução aos sistemas Inteligentes: Definições e conceitos fundamentais
                                </p></a>
                            </li>
                            <li><a href=""><p>
                                Principais características dos sistemas inteligentes: Adaptabilidade e aprendizado de máquina
                                </p></a>
                            </li>
                            <li><a href=""><p>
                                Aplicações de sistemas inteligentes em diferentes indústrias
                                </p></a>
                            </li>
                            <li><a href=""><p>
                                Principais componentes de um sistema inteligente
                                </p></a>
                            </li>
                            <li><a href=""><p>
                                As vantagens e desafios da implementação de sistemas inteligentes
                                </p></a>
                            </li>
                            <li><a href=""><p>
                                Exemplos de sistemas de informação inteligentes
                                </p></a>
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}
export default Middle