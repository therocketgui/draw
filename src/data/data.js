const draws = [
  {
    id: 1,
    start: "TBC",
    coin: "EOS",
    symbol: "EOS",
    title: "Classic Edition",
    description: "",
    status: "upcoming",
    bet: 5,
    entries: 0,
    logo: "eos.png",
    background: "draw-bg.png"
  },
  {
    id: 2,
    start: "TBC",
    coin: "Tronix",
    symbol: "TRX",
    title: "Whale Edition",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.<br /><br />0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.<br /><br />Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.<br /><br />Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    status: "upcoming",
    bet: 25000,
    entries: 0,
    logo: "trx.png",
    background: "draw-bg.png"
  },
  {
    id: 3,
    start: "TBC",
    coin: "ICON",
    symbol: "ICX",
    title: "Just For Fun Edition",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.<br /><br />0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.<br /><br />Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.<br /><br />Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    status: "upcoming",
    bet: 2,
    entries: 0,
    logo: "icx.png",
    background: "draw-bg.png"
  },
  {
    id: 4,
    start: "TBC",
    coin: "Basic Attention Token",
    symbol: "BAT",
    title: "Whale Edition",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.<br /><br />0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.<br /><br />Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.<br /><br />Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    status: "upcoming",
    bet: 4000,
    entries: 0,
    logo: "bat.png",
    background: "draw-bg.png"
  },
  {
    id: 5,
    start: "TBC",
    coin: "BNB",
    symbol: "BNB",
    title: "Classic Edition",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.<br /><br />0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.<br /><br />Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.<br /><br />Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    status: "upcoming",
    bet: 3,
    entries: 0,
    logo: "bnb.png",
    background: "draw-bg.png"
  },
  {
    id: 6,
    start: "TBC",
    coin: "FunFair",
    symbol: "FUN",
    title: "Just For Fun Edition",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.<br /><br />0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.<br /><br />Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.<br /><br />Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    status: "upcoming",
    bet: 67,
    entries: 0,
    logo: "fun.png",
    background: "draw-bg.png"
  }
];

export default draws;
