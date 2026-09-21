import type { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'executivos',
    name: 'Pratos Executivos',
    shortName: 'Executivos',
    icon: 'UtensilsCrossed',
    description: 'A la carte de alta qualidade com acompanhamentos selecionados',
    badge: 'Destaque'
  },
  {
    id: 'pizzas',
    name: 'Pizzas Artesanais',
    shortName: 'Pizzas',
    icon: 'Pizza',
    description: 'Pizzas artesanais com massa fresca, opções com borda recheada ou Calzone',
    badge: 'Quarta da Pizza'
  },
  {
    id: 'sanduiches',
    name: 'Sanduíches & Burguers',
    shortName: 'Sanduíches',
    icon: 'Sandwich',
    description: 'Pão Árabe tradicional, Burguers artesanais e Linha Gourmet',
  },
  {
    id: 'sopas',
    name: 'Sopas & Caldos',
    shortName: 'Sopas',
    icon: 'Soup',
    description: 'Servidas quentinhas das 16h às 21:30h (Média ou Grande)',
  },
  {
    id: 'cafes',
    name: 'Cafés & Acompanhamentos',
    shortName: 'Cafés',
    icon: 'Coffee',
    description: 'Cafés especiais, achocolatados, pães recheados e cestas de café da manhã',
  },
  {
    id: 'tapiocas_cuscuz',
    name: 'Tapiocas & Cuscuz',
    shortName: 'Tapiocas/Cuscuz',
    icon: 'CookingPot',
    description: 'Tapiocas crocantes e Cuscuz de milho fofinho com recheios regionais',
  },
  {
    id: 'sucos',
    name: 'Sucos Naturais & Especiais',
    shortName: 'Sucos',
    icon: 'CupSoda',
    description: 'Sucos de frutas selecionadas, sem leite, com leite e Sucos Verdes detox',
  }
];

export const PRODUCTS: Product[] = [
  // ================= PRATOS EXECUTIVOS =================
  {
    id: 'exec-831',
    code: '831',
    name: 'Filé Tornedor ao Próprio Molho',
    categoryId: 'executivos',
    description: 'Filé mignon de corte alto selado na perfeição ao molho madeira artesanal, acompanhado de risoto cremoso de funghi porcini.',
    price: 68.50,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Carne Bovina', 'Chef Choice', 'Sem Glúten'],
    isPromo: true,
    promoText: 'Mais Pedido'
  },
  {
    id: 'exec-832',
    code: '832',
    name: 'Filé à Moda Bitoque',
    categoryId: 'executivos',
    description: 'Filé mignon grelhado, ovo caipira frito com gema mole, acompanhado de arroz branco soltinho e batatas fritas crocantes.',
    price: 64.50,
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    tags: ['Carne Bovina', 'Clássico']
  },
  {
    id: 'exec-833',
    code: '833',
    name: 'Frango Light Especial',
    categoryId: 'executivos',
    description: 'Peito de frango grelhado ao molho sutil de mostarda, servido com arroz à grega colorido, palmito e salada verde fresca.',
    price: 78.00,
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    tags: ['Frango', 'Saudável']
  },
  {
    id: 'exec-834',
    code: '834',
    name: 'Frango à Cordon Bleu',
    categoryId: 'executivos',
    description: 'Filé de frango empanado recheado com queijo e presunto, servido com batata frita dita dourada, arroz branco e salada fresca.',
    price: 50.50,
    imageUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80',
    tags: ['Frango', 'Gourmet']
  },
  {
    id: 'exec-835',
    code: '835',
    name: 'Arroz Caldoso com Costela Suína',
    categoryId: 'executivos',
    description: 'Costela suína crocante empanada servida com arroz caldoso aromático no estilo risoto e salada da casa.',
    price: 58.00,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Suíno', 'Especialidade']
  },
  {
    id: 'exec-836',
    code: '836',
    name: 'Bacalhau Confit com Batatas ao Murro',
    categoryId: 'executivos',
    description: 'Posta de Bacalhau envolto em couve manteiga, arroz à grega, batata ao murro, cebolas caramelizadas e azeitonas pretas.',
    price: 136.50,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    tags: ['Pescados', 'Premium']
  },
  {
    id: 'exec-837',
    code: '837',
    name: 'Gadus Morhua ao Molho Bitoque',
    categoryId: 'executivos',
    description: 'Lombo de bacalhau cozido, arroz branco, legumes no vapor, ovo caipira cozido e delicioso molho bitoque.',
    price: 131.50,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Pescados']
  },
  {
    id: 'exec-838',
    code: '838',
    name: 'Salmão na Crosta de Ervas Finas',
    categoryId: 'executivos',
    description: 'Filé de salmão fresco grelhado com crosta crocante de farinha panko e ervas finas, servido com arroz de alho e legumes no vapor.',
    price: 84.00,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    tags: ['Pescados', 'Saudável']
  },
  {
    id: 'exec-817',
    code: '817',
    name: 'Galinha à Cachaça da Terra (2 Pessoas)',
    categoryId: 'executivos',
    description: 'Suculenta galinha caipira flambada na cachaça artesanal da serra de Viçosa, acompanhada de farofa caseira, arroz branco e salada. Servido bem para 2 pessoas.',
    price: 126.00,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    tags: ['Galinha Caipira', 'Para 2 Pessoas', 'Regional']
  },
  {
    id: 'exec-839',
    code: '839',
    name: 'Espaguete à Moda Mediterrânea',
    categoryId: 'executivos',
    description: 'Espaguete al dente salteado com camarões selecionados, tomates concassé, azeite extra-virgem e manjericão fresco.',
    price: 45.50,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3def6164286?auto=format&fit=crop&w=800&q=80',
    tags: ['Massas', 'Camarão']
  },
  {
    id: 'exec-840',
    code: '840',
    name: 'Penne à Matriciana',
    categoryId: 'executivos',
    description: 'Massa Penne envolvida em molho rústico de tomate San Marzano com bacon crocante, vinho tinto e queijo parmesão ralado na hora.',
    price: 62.00,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Massas']
  },
  {
    id: 'exec-820',
    code: '820',
    name: 'Adicional: Arroz Branco Soltinho',
    categoryId: 'executivos',
    description: 'Porção individual de arroz branco refogado no alho.',
    price: 14.00,
    imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    tags: ['Acompanhamento']
  },
  {
    id: 'exec-821',
    code: '821',
    name: 'Adicional: Arroz Especial (À Grega ou Alho)',
    categoryId: 'executivos',
    description: 'Porção individual de arroz temperado.',
    price: 20.00,
    imageUrl: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
    tags: ['Acompanhamento']
  },

  // ================= PIZZAS ARTESANAIS =================
  {
    id: 'pizza-calabresa',
    code: '531',
    name: 'Pizza Calabresa Tradicional',
    categoryId: 'pizzas',
    description: 'Molho de tomate artesanal, bastante mussarela derretida, rodelas de calabresa defumada aceboladas e orégano.',
    price: 42.00,
    imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Quarta da Pizza'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 531)', price: 42.00 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 532)', price: 33.00 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 777)', price: 33.00 }
    ],
    isPromo: true,
    promoText: 'Quarta da Pizza'
  },
  {
    id: 'pizza-frango-catupiry',
    code: '536',
    name: 'Pizza Frango com Catupiry',
    categoryId: 'pizzas',
    description: 'Frango desfiado temperado na hora, catupiry cremoso, mussarela, milho verde, ervilha e molho artesanal.',
    price: 52.50,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Campeã de Vendas'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 536)', price: 52.50 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 537)', price: 41.00 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 769)', price: 41.00 }
    ]
  },
  {
    id: 'pizza-sertaneja',
    code: '558',
    name: 'Pizza Sertaneja Especial',
    categoryId: 'pizzas',
    description: 'Suculenta carne de sol desfiada, mussarela derretida, cebola roxa, molho especial e orégano.',
    price: 52.50,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Regional'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 558)', price: 52.50 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 559)', price: 41.00 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 775)', price: 41.00 }
    ]
  },
  {
    id: 'pizza-quatro-queijos',
    code: '556',
    name: 'Pizza Quatro Queijos',
    categoryId: 'pizzas',
    description: 'Mussarela premium, queijo minas curado, catupiry e queijo parmesão polvilhado com azeitonas.',
    price: 50.50,
    imageUrl: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Vegetariana'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 556)', price: 50.50 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 557)', price: 41.00 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 774)', price: 41.00 }
    ]
  },
  {
    id: 'pizza-pepperoni',
    code: '786',
    name: 'Pizza Pepperoni Supreme',
    categoryId: 'pizzas',
    description: 'Generosas fatias de pepperoni bem assado, requeijão cremoso, mussarela abundante e molho especial.',
    price: 84.00,
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Gourmet'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 786)', price: 84.00 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 789)', price: 68.50 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 850)', price: 68.50 }
    ]
  },
  {
    id: 'pizza-camarao',
    code: '787',
    name: 'Pizza de Camarão ao Requeijão',
    categoryId: 'pizzas',
    description: 'Camarões selecionados salteados no azeite com requeijão cremoso, mussarela e molho de tomate fresco.',
    price: 52.50,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza', 'Frutos do Mar'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 787)', price: 52.50 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 790)', price: 41.00 },
      { id: 'var-calzone', name: 'Calzone Recheado (CÓD 853)', price: 41.00 }
    ]
  },
  {
    id: 'pizza-volcao-chocolate',
    code: '788',
    name: 'Pizza Vulcão de Chocolate com Morango',
    categoryId: 'pizzas',
    description: 'Massa doce artesanal coberta com rico chocolate derretido, creme de leite e morangos frescos fatiados.',
    price: 52.50,
    imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80',
    tags: ['Pizza Doce', 'Sobremesa'],
    variations: [
      { id: 'var-g-borda', name: 'Grande com Borda Recheada (CÓD 788)', price: 52.50 },
      { id: 'var-m-semborda', name: 'Média sem Borda (CÓD 791)', price: 41.00 },
      { id: 'var-calzone', name: 'Calzone Doce (CÓD 851)', price: 41.00 }
    ]
  },

  // ================= SANDUÍCHES & BURGUERS =================
  {
    id: 'sand-pao-arabe-carne-sol',
    code: '578',
    name: 'Pão Árabe à Carne de Sol',
    categoryId: 'sanduiches',
    description: 'Pão árabe macio recheado com carne de sol desfiada e suculenta, molho especial, mussarela derretida e alface fresca.',
    price: 30.50,
    imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
    tags: ['Pão Árabe', 'Mais Vendido'],
    variations: [
      { id: 'standard', name: 'Pão Árabe Tradicional (CÓD 578)', price: 30.50 },
      { id: 'super', name: 'Tamanho SUPER Caprichado (CÓD 577)', price: 40.00 }
    ]
  },
  {
    id: 'sand-pao-arabe-frango',
    code: '581',
    name: 'Pão Árabe ao Frango',
    categoryId: 'sanduiches',
    description: 'Pão árabe recheado com peito de frango temperado, mussarela, milho, ervilha e alface crocante.',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tags: ['Pão Árabe'],
    variations: [
      { id: 'standard', name: 'Pão Árabe Tradicional (CÓD 581)', price: 19.00 },
      { id: 'super', name: 'Tamanho SUPER Caprichado (CÓD 582)', price: 29.50 }
    ]
  },
  {
    id: 'sand-suino-bbq',
    code: '841',
    name: 'Hambúrguer Suíno ao Molho Barbecue',
    categoryId: 'sanduiches',
    description: 'Suculento hambúrguer artesanal suíno, bacon crocante, molho barbecue defumado, alface, tomate fresco e porção de batatas fritas.',
    price: 41.00,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    tags: ['Sanduíche Gourmet', 'Batata Frita']
  },
  {
    id: 'sand-file-cheddar',
    code: '843',
    name: 'Sanduíche de Filé Mignon com Cheddar',
    categoryId: 'sanduiches',
    description: 'Tiras de filé mignon macio, queijo cheddar cremoso derretido, bacon, maionese temperada, alface, tomate, cebola e batata frita.',
    price: 47.50,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Sanduíche Gourmet', 'Filé Mignon'],
    isPromo: true,
    promoText: 'Top Gourmet'
  },
  {
    id: 'sand-sertanejo-esp',
    code: '844',
    name: 'Sanduíche Sertanejo Especial',
    categoryId: 'sanduiches',
    description: 'Pão português selado na manteiga de gado, carne de sol artesanal, queijo coalho tostado, bacon, rúcula e batatas fritas.',
    price: 44.50,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['Sanduíche Gourmet', 'Queijo Coalho']
  },
  {
    id: 'sand-croque-madame',
    code: '846',
    name: 'Sanduíche Croque Madame',
    categoryId: 'sanduiches',
    description: 'Pão de forma especial, presunto, mussarela, molho bechamel gratinado com ovo caipira frito por cima e batata frita.',
    price: 25.50,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Gourmet', 'França']
  },
  {
    id: 'sand-bauru',
    code: '567',
    name: 'Bauru Tradicional da Casa',
    categoryId: 'sanduiches',
    description: 'Hambúrguer, ovo caipira frito, mussarela derretida, presunto, alface e tomate fresco.',
    price: 24.50,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Clássico']
  },

  // ================= SOPAS & CALDOS =================
  {
    id: 'sopa-macaxeira-carne-sol',
    code: '727',
    name: 'Sopa de Macaxeira com Carne de Sol',
    categoryId: 'sopas',
    description: 'Creme aveludado e quentinho de macaxeira da serra temperada com pedaços suculentos de carne de sol. (Servido das 16h às 21:30h)',
    price: 16.00,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tags: ['Regional', 'Das 16h às 21:30h'],
    variations: [
      { id: 'grande', name: 'Tamanho Grande (CÓD 727)', price: 16.00 },
      { id: 'media', name: 'Tamanho Médio (CÓD 728)', price: 12.00 }
    ],
    isPromo: true,
    promoText: 'Aquecer a Noite'
  },
  {
    id: 'sopa-canja-frango',
    code: '621',
    name: 'Canja de Frango Caipira',
    categoryId: 'sopas',
    description: 'Canja caseira reconfortante com peito de frango, arroz, cenoura e legumes frescos levemente temperados.',
    price: 16.00,
    imageUrl: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80',
    tags: ['Leve', 'Reconfortante'],
    variations: [
      { id: 'grande', name: 'Tamanho Grande (CÓD 621)', price: 16.00 },
      { id: 'media', name: 'Tamanho Médio (CÓD 620)', price: 12.00 }
    ]
  },
  {
    id: 'sopa-caldo-carne',
    code: '619',
    name: 'Caldo de Carne Suculento',
    categoryId: 'sopas',
    description: 'Caldo concentrado e rico de carne bovina cozida com mandioca e temperos verdes frescos.',
    price: 16.00,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tags: ['Tradicional'],
    variations: [
      { id: 'grande', name: 'Tamanho Grande (CÓD 619)', price: 16.00 },
      { id: 'media', name: 'Tamanho Médio (CÓD 618)', price: 12.00 }
    ]
  },

  // ================= CAFÉS & ACOMPANHAMENTOS =================
  {
    id: 'cafe-cappuccino',
    code: '516',
    name: 'Cappuccino Especial Pão da Vida',
    categoryId: 'cafes',
    description: 'Café expresso encorpado, leite vaporizado cremoso, toque de cacau 100% e canela em pó.',
    price: 10.50,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['Café', 'Cremoso'],
    variations: [
      { id: 'normal', name: 'Cappuccino Normal (CÓD 516)', price: 10.50 },
      { id: 'duplo', name: 'Cappuccino Duplo (CÓD 513)', price: 17.00 },
      { id: 'chantilly', name: 'Cappuccino com Chantilly (CÓD 514)', price: 17.00 }
    ]
  },
  {
    id: 'cafe-chocolate-quente',
    code: '518',
    name: 'Chocolate Quente Europeu',
    categoryId: 'cafes',
    description: 'Chocolate quente denso e aveludado preparado com cacau nobre e leite cremoso.',
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    tags: ['Bebida Quente'],
    variations: [
      { id: 'medio', name: 'Tamanho Médio (CÓD 518)', price: 13.00 },
      { id: 'grande', name: 'Tamanho Grande (CÓD 519)', price: 19.00 }
    ]
  },
  {
    id: 'cafe-pao-manteiga',
    code: '109',
    name: 'Pão Francês na Chapa com Manteiga de Gado (2 Unid.)',
    categoryId: 'cafes',
    description: 'Dois pães franceses quentinhos selados na chapa com autêntica manteiga de gado regional.',
    price: 6.50,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Padaria Artesanal']
  },
  {
    id: 'cafe-cesta-especial',
    code: '828',
    name: 'Cesta de Café da Manhã Especial (Por Encomenda)',
    categoryId: 'cafes',
    description: 'Cesta comemorativa completa: suco natural, pães artesanais diversos, tapiocas, frios, café em sachê, bolos e geleias regionais.',
    price: 168.00,
    imageUrl: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=800&q=80',
    tags: ['Encomenda', 'Presente Especial']
  },

  // ================= TAPIOCAS & CUSCUZ =================
  {
    id: 'tap-queijo-carne-sol',
    code: '647',
    name: 'Tapioca de Queijo Coalho com Carne de Sol',
    categoryId: 'tapiocas_cuscuz',
    description: 'Tapioca de goma artesanal fininha e crocante, recheada com queijo coalho derretido e carne de sol desfiada.',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    tags: ['Tapioca', 'Regional', 'Sem Glúten'],
    isPromo: true,
    promoText: 'Mais Pedida'
  },
  {
    id: 'cuscuz-mussarela-carne-sol',
    code: '666',
    name: 'Cuscuz de Milho com Mussarela e Carne de Sol',
    categoryId: 'tapiocas_cuscuz',
    description: 'Cuscuz nordestino de milho bem fofinho e temperado, coberto com queijo mussarela derretido e carne de sol selada na manteiga.',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Cuscuz', 'Tradicional']
  },
  {
    id: 'cuscuz-mussarela-ovo',
    code: '667',
    name: 'Cuscuz de Milho com Mussarela e Ovo Caipira',
    categoryId: 'tapiocas_cuscuz',
    description: 'Cuscuz quentinho servido com queijo mussarela tostado e ovos caipiras mexidos com gema cremosa.',
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Cuscuz']
  },

  // ================= SUCOS NATURAIS & ESPECIAIS =================
  {
    id: 'suco-verde-capim-santo',
    code: '602',
    name: 'Suco Verde - Capim Santo com Maracujá',
    categoryId: 'sucos',
    description: 'Suco especial refrescante e detox preparado com infusão de capim santo fresco e polpa concentrada de maracujá.',
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    tags: ['Detox', 'Refrescante', 'Suco Verde']
  },
  {
    id: 'suco-fonte-saude',
    code: '595',
    name: 'Suco Natural - Fonte de Saúde',
    categoryId: 'sucos',
    description: 'Combinação potente e revigorante de suco de laranja natural, beterraba e cenoura frescos.',
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=800&q=80',
    tags: ['100% Natural', 'Vitamins']
  },
  {
    id: 'suco-acai-banana-granola',
    code: '597',
    name: 'Vitamina de Açaí com Banana e Granola',
    categoryId: 'sucos',
    description: 'Polpa de açaí batida com leite cremoso, banana nanica doce e servido com granola crocante artesanal.',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    tags: ['Com Leite', 'Energético']
  },
  {
    id: 'suco-laranja-natural',
    code: '609',
    name: 'Suco de Laranja (Da Fruta)',
    categoryId: 'sucos',
    description: 'Suco espremido na hora de laranjas selecionadas doces da serra.',
    price: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    tags: ['Da Fruta'],
    variations: [
      { id: 'sem-leite', name: 'Suco Sem Leite 300ml (CÓD 609)', price: 8.50 },
      { id: 'com-leite', name: 'Suco Com Leite 300ml (CÓD 703)', price: 10.50 },
      { id: 'supersuco', name: 'Supersuco 500ml - Duas Polpas (CÓD 50+609)', price: 17.00 }
    ]
  }
];

export const RESTAURANT_INFO = {
  name: 'Pão da Vida',
  slogan: 'Gastronomia com Responsabilidade Socioambiental',
  address: 'Praça General Tibúrcio, 594, Centro',
  city: 'Viçosa do Ceará - CE',
  phone: '(88) 3632.1444',
  whatsappNumber: '558836321444',
  openingHours: 'Todos os dias das 06:30h às 22:00h',
  selfServiceHours: 'Self Service por Quilo: Almoço a partir das 11:00h',
  soupsHours: 'Sopas quentinhas a partir das 16:00h',
  socialCause: 'O resultado da venda dos produtos Pão da Vida é revertido para a manutenção de obras humanitárias em benefício de crianças e jovens em risco social e suas famílias.'
};
