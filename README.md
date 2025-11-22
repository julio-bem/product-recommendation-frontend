# 🎨 Frontend - Recomendador RD Station

**Módulo de Interface do Usuário**  
Responsável pela apresentação, interação e lógica de cliente do Sistema de Recomendação.

---

## 📋 Visão Geral

O módulo **Frontend** foi construído com **React.js** e **Tailwind CSS**, priorizando:

- Componentização clara  
- Código limpo  
- UX fluida  
- Performance instantânea  

Ele consome a API simulada (JSON-Server) para buscar produtos e processa a lógica de recomendação localmente usando um algoritmo otimizado.

---

## 🌟 Destaques de Implementação

### **Arquitetura Limpa**
Separação nítida entre:

- `components/`  
- `hooks/`  
- `services/`  

### **Design System Customizado**
- **SelectableCard**: substitui checkboxes, aumentando área clicável e legibilidade.
- **ProductModal**: modal acessível para detalhes dos produtos.
- **Layout Responsivo**: grid mobile-first utilizando Tailwind.

### **Performance**
Algoritmo de recomendação com:

- Complexidade **O(N)**  
- Uso de **Set** para lookups constantes **O(1)**

---

## 🛠️ Tecnologias & Bibliotecas

- **Core:** React 18  
- **Estilização:** Tailwind CSS v3  
- **Testes:** Jest + React Testing Library  
- **HTTP:** Fetch API nativa (via custom hooks)

---

## 🚀 Como Executar (Isoladamente)

Se você deseja rodar apenas o frontend:

### **1. Instalação**
Dentro da pasta `frontend/`:

```bash
yarn install
```

### **2. Scripts Disponíveis**

| Comando     | Descrição                                                     |
|-------------|----------------------------------------------------------------|
| `yarn start` | Inicia o servidor de desenvolvimento em `http://localhost:3000`. |
| `yarn test`  | Executa a suíte de testes unitários.                          |
| `yarn build` | Gera a versão de produção (pasta `build/`).                   |

---

## 📂 Estrutura de Diretórios

```
src/
├── components/               # Componentes visuais reutilizáveis
│   ├── Footer/               # Rodapé institucional
│   ├── Form/                 # Formulário de preferências
│   ├── Header/               # Barra de navegação global
│   ├── RecommendationList/   # Cards e Modais de produtos
│   └── shared/               # Componentes atômicos (ex: SelectableCard)
├── hooks/                    # Custom Hooks (useProducts, useForm)
├── mocks/                    # Dados estáticos para testes
├── services/                 # Lógica de negócios pura (recommendation.service.js)
└── App.js                    # Componente raiz e orquestrador de layout
```

---

## 🧪 Testes

Os testes unitários focam exclusivamente na lógica crítica do recomendador.

Para executar:

```bash
yarn test
```

### **Cobertura Principal**

- `recommendation.service.test.js`  
  - Cenários: SingleProduct, MultipleProducts  
  - Empates  
  - Filtros vazios  
  - Critério de “último produto válido”  

---

## 👤 Autor

Desenvolvido por **Júlio César**.  
📧 **juliocsbem@gmail.com**