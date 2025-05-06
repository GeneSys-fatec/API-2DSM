<span id="topo">

<h1 align="center">Sprint 2: 07/04/2025 - 27/04/2025</h1>

<p align="center">
    <a href="#dor-dod">DoR e DoD</a> &nbsp |&nbsp &nbsp
    <a href="#objetivos">Objetivos da Sprint</a> &nbsp |&nbsp &nbsp
    <a href="#entrega">Entrega</a> &nbsp |&nbsp &nbsp
    <a href="#metricas">Métricas do Time</a> 
</p>

<br>

O projeto consiste no desenvolvimento de um Dashboard de Indicadores para monitorar e visualizar o impacto das empresas parceiras da Helpnei.
Com foco no MVP, a segunda sprint teve como objetivo tornar o Dashboard de Indicadores funcional e completo, já integrando os dados extraídos do banco de dados.
Paralelamente, iniciamos o desenvolvimento de novas funcionalidades do projeto, como a Tela de Cadastramento de Dados (front-end), destinada a usuários interessados em serem patrocinados por empresas que se alinhem ao seu perfil cadastrado, e a Tela de Empresas Disponíveis para Patrocínio, voltada à visualização de informações detalhadas sobre as empresas.
Para isso, os requisitos foram levantados e validados, e o protótipo foi construído com o objetivo de entregar uma interface alinhada às necessidades e dores do cliente.

<br>

<span id="dor-dod">

## 📍 DoR Definition of Ready
**:link: Clique no link abaixo para visualizar o DoR da Sprint 02:**  
> [Definition of Ready](https://docs.google.com/document/d/1_yX0LBt2_SmMM5A1oGvAi57aOLmhgI5GVjWYFB8OikM/edit?tab=t.4j6zacb4i64c)

<br>

## 📍 DoD Definition of Done
**:link: Clique no link abaixo para visualizar o DoD da Sprint 02:**  
> [Definition of Done](https://docs.google.com/document/d/142-spFvZzo04tRTbLO0dZs-c4uruG32qb-unrMd3bJ0/edit?tab=t.qgc4e7w6objb)

<br>

<span id="objetivos">
    
## 🎯 Objetivos da Sprint
O principal objetivo para essa segunda sprint era de desenvolver o back-end do Dashboard de Indicadores, e começar o desenvolvimento das novas funcionalidades do projeto, com os seguintes requisitos (tanto do cliente como da instituição de ensino):
- **RF01:** O Dashboard deve conter métricas numéricas essenciais como: Número de Lojas Criadas, Número de Patrocinados, Usuários Impactados e Distribuição Geográfica (cidades atendidas).
- **RF02**: O Dashboard deve conter um Gráfico Dinâmico que exibe a quantidade de usuários impactados.
- **RF03**: O Dashboard deve conter um Mapa Interativo que exibe a distribuição geográfica dos usuários e das lojas criadas.
- **RF04**: Desenvolver uma página onde o usuário se cadastra e onde o usuário escolhe por qual empresa gostaria de ser patrocinado.
- **RNF:** Utilizar React e TypeScript.

<br>

### Backlog da Sprint 

| ID |   Prioridade   |   Título   |   User Story   |   Requisito   |
| --- | --- | --- | --- | --- |
 US01 | ALTA | Visão Geral do Dashboard |Como patrocinador, quero acessar um dashboard geral da plataforma, para visualizar os principais indicadores de crescimento.| RF01 |
 US03 | ALTA | Monitoramento de Usuários Impactados |Como patrocinador, quero visualizar o número total de usuários impactados, para entender o alcance da plataforma.| RF01 |
 US06 | ALTA | Exibição da Distribuição Geográfica |Como patrocinador, quero visualizar a distribuição geográfica das lojas em um mapa interativo, para identificar as cidades de maior adoção.| RF01 |
 US07 | MÉDIA | Cadastramento de Dados | Como usuário, quero cadastrar minhas informações pessoais e de perfil, para que possa visualizar quais empresas patrocinadoras têm vagas disponíveis compatíveis comigo e escolher aquela com a qual mais me identifico.| RF02 |
 US08 | MÉDIA | Página de Exibição das Empresas | Como usuário, quero uma página que liste todas as empresas patrocinadoras, para poder clicar em uma delas e visualizar suas informações detalhadas.| RF02 |

<br>

<span id="entrega">
        
## ☑️ Entrega

Para a segunda entrega, os artefatos SCRUM, como o Backlog do Produto, o Backlog da Sprint e as User Stories, foram validados por meio de comunicação direta entre o PO e o cliente.
Para extrair e compreender os requisitos do cliente para esta sprint, foi desenvolvido um novo protótipo no Figma, adaptado às novas funcionalidades solicitadas. Esse protótipo definiu a identidade visual e o design do sistema e foi apresentado para validação.
O resultado validado serviu de base para a implementação utilizando React, com dados extraídos do banco de dados (MySQL), conforme acordado para esta segunda sprint, e pode ser observado a seguir:

<a href='https://youtu.be/iau4KI8iHJI'>Vídeo do Projeto</a>

<br>

<span id="metricas">
    
## 📈 Métricas do Time
Nesta segunda sprint, a equipe se dividiu entre front-end e back-end. Alguns membros ficaram responsáveis pela reestilização do layout do Dashboard de Indicadores e pela criação do front-end das novas telas solicitadas, enquanto outros se dedicaram à implementação do CRUD para manipulação de dados, à funcionalidade do mapa e do gráfico do dashboard, além da criação da lógica para a exibição dinâmica das empresas.
O acompanhamento de atividades, responsabilidade do Scrum Master, se encontra na imagem adiante, que contém o gráfico Burndown gerado pela equipe, onde o eixo X são os dias trabalhados na sprint e os valores do eixo Y representam as entregas e esforços realizados com o passar do tempo, incluindo as atividades desenvolvidas e seus responsáveis.

<div align="center">
    
![Burndown Chart](https://github.com/gbmedeiros00/testeee/blob/main/burndown-sprint2.png)
</div>

<br>

→ [Voltar ao topo](#topo)
