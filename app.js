AOS.init({duration:900,once:true});

    const products = [
      {id:1,name:"Шерстяное пальто Camel",price:450,img:"https://cs5.livemaster.ru/storage/8e/5c/fdc8406a6da3badf5a27d79f3fs2--muzhskaya-odezhda-muzhskoe-palto-polo-mod-1-kemel-sherst-s-ka.jpg",desc:"Классическое пальто из 100% шерсти верблюжьего окраса.",category:"outerwear",colors:["Чёрный","Серый","Бежевый"],sizes:["M","L","XL","XXL"]},
      {id:2,name:"Кашемировое пальто",price:680,img:"https://ae04.alicdn.com/kf/S501624873e9d4e588ebd96e71911d075p.jpg",desc:"Премиальное пальто из чистого кашемира.",category:"outerwear",colors:["Чёрный","Тёмно-синий"],sizes:["M","L","XL"]},
      {id:3,name:"Костюм-тройка",price:890,img:"https://budless.shop/wp-content/uploads/2023/10/img_4217.jpg",desc:"Классический костюм-тройка из итальянской шерсти.",category:"outerwear",colors:["Чёрный","Тёмно-синий","Серый"],sizes:["46","48","50","52"]},
      {id:4,name:"Блейзер тёмно-синий",price:360,img:"https://www.menslife.com/upload/iblock/ad5/temno-siniy-bleyzer-kak-nosit.jpg",desc:"Стильный блейзер с современным кроем.",category:"outerwear",colors:["Тёмно-синий","Чёрный"],sizes:["S","M","L","XL"]},
      {id:5,name:"Кожаная куртка Pilot",price:590,img:"https://a.lmcdn.ru/img389x562/M/P/MP002XM0DTP3_29005941_1_v1_2x.jpg",desc:"Классическая кожаная куртка в стиле авиатор.",category:"outerwear",colors:["Чёрный","Коричневый"],sizes:["M","L","XL"]},
      {id:6,name:"Тренч бежевый",price:420,img:"https://opshop.me/image/cache/catalog/muzjskie-kurtki/tc0081-7-1000x1000.jpg",desc:"Классический тренчкот в бежевом цвете.",category:"outerwear",colors:["Бежевый","Чёрный"],sizes:["M","L","XL","XXL"]},
      {id:7,name:"Кашемировый свитер",price:280,img:"https://www.cachemire-hermine.fr/6065-large_default/muzhskoj-kashemirovyj-sviter-s-vorotnikom-stojkoj-cvet-kofe.jpg",desc:"Мягкий свитер из 100% кашемира.",category:"tops",colors:["Серый","Чёрный","Бежевый","Синий"],sizes:["S","M","L","XL"]},
      {id:8,name:"Водолазка Merino",price:140,img:"https://www.charuel.ru/upload/iblock/593/pxm02n4bhl94zcqurmrfq2yj4c3f17rh.jpg",desc:"Тонкая водолазка из мериносовой шерсти.",category:"tops",colors:["Чёрный","Белый","Серый","Синий"],sizes:["S","M","L","XL"]},
      {id:9,name:"Рубашка Oxford",price:110,img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",desc:"Классическая рубашка Oxford из хлопка.",category:"tops",colors:["Белый","Голубой"],sizes:["38","39","40","41","42"]},
      {id:10,name:"Классическая рубашка",price:120,img:"https://keyman.by/image/cache/catalog/Catalog/Misha_Beatles/September%2024/keym-3095-original.jpg",desc:"Классическая рубашка из египетского хлопка.",category:"tops",colors:["Чёрный","Белый"],sizes:["S","M","L","XL"]},
      {id:11,name:"Классические брюки",price:165,img:"https://a.lmcdn.ru/img389x562/M/P/MP002XM0DQ7W_28283622_1_v2_2x.jpg",desc:"Классические брюки из премиальной итальянской шерсти.",category:"bottoms",colors:["Бежевый","Хаки","Чёрный"],sizes:["30","32","34","36"]},
      {id:12,name:"Джинсы Slim Black",price:195,img:"https://storage-cdn10.gloria-jeans.ru/pictures/Cernye-dzinsy-Slim_BJN017307-1_05_1200Wx1200H.jpeg?q=744195",desc:"Чёрные джинсы slim-fit.",category:"bottoms",colors:["Чёрный","Тёмно-синий"],sizes:["30","32","34","36"]},
      {id:13,name:"Оксфорды",price:240,img:"https://galano.by/image/cache/catalog/obuv/6q9a0736kopija-600x800.jpg",desc:"Классические оксфорды из натуральной кожи.",category:"shoes",colors:["Чёрный","Коричневый"],sizes:["40","41","42","43","44"]},
      {id:14,name:"Лоферы замшевые",price:220,img:"https://static.insales-cdn.com/r/8Dx69og3dg0/rs:fit:1000:0:1/q:100/plain/images/products/1/1000/813532136/photo_5222305088473778776_y.jpg@jpg",desc:"Замшевые лоферы премиум-класса.",category:"shoes",colors:["Коричневый","Чёрный","Синий"],sizes:["40","41","42","43","44"]},
      {id:15,name:"Кожаный портфель",price:350,img:"https://www.uh-ty.com.ua/image/cache/data/00660-------700x700.jpg",desc:"Классический кожаный портфель ручной работы.",category:"accessories"},
      {id:16,name:"Кашемировый шарф",price:130,img:"https://static.insales-cdn.com/files/1/4674/15389250/original/romnastena-1.jpg",desc:"Мягкий кашемировый шарф.",category:"accessories",colors:["Серый","Чёрный","Бежевый"]},
      {id:17,name:"Шёлковый галстук",price:85,img:"https://www.mysteryparfum.com.ua/images/aksessuar/galstuk.shirok.silk.jpg",desc:"Шёлковый галстук премиум-качества.",category:"accessories",colors:["Красный","Синий","Чёрный","Бордовый"]},
      {id:18,name:"Классические часы",price:890,img:"https://tap.kg/media/products/89/L3B8P60JZL5AYR6.JPEG",desc:"Механические часы в классическом стиле.",category:"accessories"},
      {id:19,name:"Парфюм Jean Paul",price:180,img:"https://basket-17.wbbasket.ru/vol2796/part279695/279695131/images/big/1.webp",desc:"Фирменный аромат MONARCH Signature.",category:"accessories"},
      {id:20,name:"Кожаный ремень",price:95,img:"https://cdn.technoavia.ru/img/product_images/3634.jpg?sc=model_zoom",desc:"Ремень из натуральной кожи.",category:"accessories",colors:["Чёрный","Коричневый"],sizes:["90","95","100","105"]},
      {id:21,name:"Нагрудный платок",price:150,img:"https://gw.alicdn.com/imgextra/i3/3071702300/O1CN01fnVHPn1SrRgMrfps4_!!0-item_pic.jpg_540x540.jpg",desc:"Шёлковый нагрудный платок.",category:"accessories",colors:["Белый","Красный","Синий","Чёрный"]}
    ];

    const colorHex = {Чёрный:'#111',Серый:'#666',Синий:'#0A1A2F',Белый:'#fff',Бежевый:'#d8c3a5',Коричневый:'#8b4513',Красный:'#c00',Бордовый:'#800020',Хаки:'#8b8b5e','Тёмно-синий':'#001f3f',Голубой:'#add8e6'};

    let cart = [];
    const cartModal = document.getElementById('cartModal');
    const orderModal = document.getElementById('orderModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const orderTotal = document.getElementById('orderTotal');
    const cartCount = document.getElementById('cartCount');

    function renderCatalog(filter = 'all') {
      const grid = document.getElementById('catalogGrid');
      grid.innerHTML = '';
      const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
      filtered.forEach((p, i) => {
        const hasColors = p.colors && p.colors.length > 0;
        const hasSizes = p.sizes && p.sizes.length > 0;
        const colorOptions = hasColors ? p.colors.map(c => `<div class="color-option" style="background:${colorHex[c]||'#666'}" title="${c}"></div>`).join('') : '';
        const sizeButtons = hasSizes ? p.sizes.map(s => `<button type="button" class="size-btn" data-size="${s}">${s}</button>`).join('') : '';

        const div = document.createElement('div');
        div.className = 'product-card';
        div.setAttribute('data-aos','fade-up');
        div.innerHTML = `
          <img src="${p.img}" class="product-img" onerror="this.src='https://via.placeholder.com/600x340/1a1a1a/f5f5f5?text=MONARCH'">
          <div class="product-info">
            <h3>${p.name}</h3>
            <div class="product-desc">${p.desc}</div>
            <div class="price">€${p.price}</div>
            <div class="product-options">
              ${hasColors ? `<div class="option-group"><label>Цвет:</label><div class="color-picker" data-id="${p.id}">${colorOptions}</div></div>` : ''}
              ${hasSizes ? `<div class="option-group"><label>Размер:</label><div class="size-picker" data-id="${p.id}">${sizeButtons}</div></div>` : ''}
              <div class="option-group"><label>Кол-во:</label><input type="number" min="1" value="1" class="qty-input" data-id="${p.id}"></div>
            </div>
            <button class="btn-buy" data-id="${p.id}">В корзину</button>
          </div>`;
        grid.appendChild(div);
      });
      AOS.refresh();

      document.querySelectorAll('.color-picker').forEach(p=> {
        const opts = p.querySelectorAll('.color-option');
        if(opts.length) opts[0].classList.add('selected');
        p.addEventListener('click', e=> { if(e.target.classList.contains('color-option')) { p.querySelectorAll('.color-option').forEach(x=>x.classList.remove('selected')); e.target.classList.add('selected'); } });
      });
      document.querySelectorAll('.size-picker').forEach(p=> {
        const btns = p.querySelectorAll('.size-btn');
        if(btns.length) btns[0].classList.add('selected');
        p.addEventListener('click', e=> { if(e.target.classList.contains('size-btn')) { p.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('selected')); e.target.classList.add('selected'); } });
      });
    }

    document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderCatalog(b.dataset.category);}));

    function updateCart() {
      cartCount.textContent = cart.length;
      cartCount.style.display = cart.length?'flex':'none';
      if(cart.length===0){cartItems.innerHTML='<p style="text-align:center;color:#888;">Корзина пуста</p>';cartTotal.textContent='Итого: €0';orderTotal.textContent='€0';return;}
      let total=0; cartItems.innerHTML='';
      cart.forEach((item,i)=>{const pr=products.find(x=>x.id===item.id);total+=pr.price*item.quantity;
        const info=[]; if(item.color)info.push(item.color); if(item.size)info.push(item.size); info.push(`×${item.quantity}`);
        const d=document.createElement('div');d.style.cssText='display:flex;justify-content:space-between;padding:0.8rem 0;border-bottom:1px solid #333;';
        d.innerHTML=`<div><strong>${pr.name}</strong><br><small style="color:#888;">${info.join(' • ')}</small></div>
          <div style="text-align:right;">€${pr.price*item.quantity}<button style="background:none;border:none;color:#ff6b6b;font-size:1.4rem;cursor:pointer;margin-left:10px;" data-index="${i}">×</button></div>`;
        cartItems.appendChild(d);
      });
      cartTotal.textContent=`Итого: €${total}`; orderTotal.textContent=`€${total}`;
    }

    document.addEventListener('click', e => {
      if(e.target.classList.contains('btn-buy') && e.target.dataset.id){
        const card=e.target.closest('.product-card'); const id=+e.target.dataset.id; const p=products.find(x=>x.id===id);
        let color=null; if(p.colors){const el=card.querySelector(`.color-picker[data-id="${id}"] .selected`);color=el?el.title:p.colors[0];}
        let size=null; if(p.sizes){const el=card.querySelector(`.size-picker[data-id="${id}"] .selected`);size=el?el.dataset.size:p.sizes[0];}
        const qty=+(card.querySelector(`input.qty-input[data-id="${id}"]`).value||1);
        cart.push({id,color,size,quantity:qty}); updateCart();
      }
      if(e.target.tagName==='BUTTON'&&e.target.textContent==='×'&&e.target.dataset.index!==undefined){cart.splice(+e.target.dataset.index,1);updateCart();}
      if(e.target.closest('#cartIcon')) cartModal.style.display='flex';
      if(e.target.id==='checkoutBtn'){if(cart.length===0){alert('Корзина пуста');return;}cartModal.style.display='none';orderModal.style.display='flex';}
      if(e.target.classList.contains('close')||e.target===cartModal||e.target===orderModal){cartModal.style.display='none';orderModal.style.display='none';}
    });

    renderCatalog('all');
    updateCart();