import { infoWikiTranslationOverrides } from "./translations.info-wiki";

const baseTranslations = {
  es: {
    navbar: {
      home: "Inicio",
      downloads: "Descargas",
      more: "Más",
      substack: "SubStack",
      info: "Info",
      news: "Noticias",
      faq: "FAQ",
      registro: "Cuenta",
      community: "Comunidad",
      vote: "Votar",
      discord: "Discord",
      socialMedia: "Redes",
      language: "Idioma",
    },
    home: {
      hero: "Interlude x25",
      downloadClient: "Descargar Cliente",
      joinDiscord: "Unirse a Discord",
      heroPromo: {
        badge: "Temporada activa",
        title: "Para clanes que quieren progreso real",
        desc: "SubStack, AutoFarm, eventos y economía activa en un servidor pensado para durar. Entra con toda la información clara desde el día uno.",
        cta: "Ver Info completa",
        registroCta: "Sin registro web: cómo crear cuenta al primer login",
        trust: {
          noWipe: "No wipe",
          antiDdos: "Anti-DDoS",
          autoAccount: "Auto Create Account",
          activeDiscord: "Discord activo",
        },
      },
      guidesDeepLink: {
        kicker: "Documentación",
        headline: "Centro de información",
        hint: "Índice en /info: rates, features, economía, comandos e instancias. Cada tema tiene landing con URL propia para compartir.",
        cta: "Wiki del servidor",
        linkSub: "Índice completo y landings por sección.",
        action: "Ir al índice",
      },
      quickNav: {
        title: "Accesos rápidos",
        downloads: "Descargar cliente",
        features: "Features del servidor",
        rates: "Rates x25",
        faq: "FAQ",
        news: "Noticias",
        community: "Comunidad",
      },
      featuresSection: {
        title: "Destacados del servidor",
      },
      infoStrip: {
        title: "Quieres todo el detalle del servidor?",
        description:
          "Rates, comandos, eventos, daily, economy, VIP y reglas claras en una sola página.",
        cta: "Ver Info completa",
      },
      features: {
        cumulative: {
          title: "SubStack real",
          description:
            "Modelo clase base +1: sumás una subclase sin reemplazar la base (ej. adventurer + Sword Muse). La base no muta; se acumulan skills de la subclase.",
        },
        economy: {
          title: "Economía y progreso",
          description:
            "Monedas, Titan Box y tiendas con un circuito claro entre farm, PvP y bosses.",
        },
        events: {
          title: "AutoFarm configurable",
          description:
            "Modos, assist, filtros y radio para farmear con control total.",
        },
      },
    },
    countdown: {
      title: "Servidor en linea",
      subtitle: "Temporada activa",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      serverOpen: "Servidor abierto",
      playNow: "Trae a tus amigos, arma tu clan y salgan a competir.",
    },
    downloads: {
      title: "CENTRO DE DESCARGAS",
      accountNotice: {
        title: "Auto Create Account activado",
        description:
          "No necesitas registrarte en una web. Tu cuenta se crea automaticamente cuando entras al juego por primera vez.",
      },
      quickStart: {
        title: "Pasos rápidos para jugar",
        step1: "Descarga el Cliente Completo o el Launcher.",
        step2: "Descomprime el juego y abre L2TitanLauncher.",
        step3: "Inicia sesión en el juego con el usuario y clave que quieras.",
        step4:
          "Tu cuenta se crea automaticamente al primer login (Auto Create Account).",
      },
      table: {
        file: "Archivo",
        size: "Tamaño",
        type: "Tipo",
        action: "Acción",
      },
      download: "Descargar",
      requirements: {
        minimum: "MINIMOS",
        recommended: "RECOMENDADOS",
        requirements: "REQUISITOS",
      },
      fileNames: {
        fullClient: "Cliente Completo",
        launcher: "Launcher",
      },
      relatedDocs: {
        kicker: "Después de descargar",
        title: "Documentación relacionada",
        subtitle:
          "Instalá el cliente y seguí con rates, features y la comunidad; todo está enlazado para que no te pierdas.",
        wikiCta: "Wiki del servidor",
        wikiHint:
          "Índice en /info: rates, VIP, economía, comandos e instancias.",
        wikiAction: "Ir al índice",
        features: "Features del servidor",
        rates: "Rates x25",
        community: "Discord y comunidad",
        news: "Noticias",
        navAria: "Enlaces útiles después de instalar el cliente",
        quickLinksLabel: "Enlaces rápidos",
      },
    },
    footer: {
      voteForUs: "Vota por nosotros",
      characterName: "Nombre del personaje",
      enterCharName: "Ingresa el nombre de tu personaje",
      l2jbrasilExactNameRule:
        "El nombre debe coincidir exactamente con el que usaras en .vote.",
      voteSubmit: "Votar",
      closeModal: "Cerrar",
      copyright: "L2Titan.com.",
      linkSubstack: "SubStack",
      linkRates: "Rates",
      linkDownloads: "Descargas",
      linkSubstackEn: "SubStack (EN)",
      linkFaq: "FAQ para jugadores",
      linkAccount: "Crear cuenta (Auto Create)",
      linkCommunity: "Comunidad y Discord",
      linkFeatures: "Features del servidor",
      linkNews: "Noticias y parches",
    },
    // Keep old rates.* keys for backward compat
    rates: {
      title: "INFORMACIÓN DEL SERVIDOR",
      serverRates: "SERVER RATES",
      gameFeatures: "GAME FEATURES",
      enchantRates: "ENCHANT RATES",
      rates: {
        experience: "Experiencia (XP)",
        skillPoints: "Skill Points (SP)",
        partyXP: "Party XP",
        partySP: "Party SP",
        adena: "Adena",
        dropItems: "Drop Items",
        spoil: "Spoil",
        sealStones: "Seal Stones",
        manor: "Manor",
      },
      features: {
        chronicle: "Crónica: Interlude",
        antiBot: "Anti-Bot: SmartGuard",
        geodata: "Geodata: Premium",
        sieges: "Sieges: Semanales",
        olympiad: "Olympiad: Cada 2 semanas",
        subStack:
          "SubStack: clase base +1 (una subclase encima de la base, sin reemplazarla; ej. adventurer + Sword Muse). No muta tu clase base: se suman skills de la subclase.",
      },
      philosophy: {
        title: "Filosofía L2Titan",
        description:
          "Es un modelo de subclases acumulativas en el que por cada clase puedes combinar tus skills con otras clases.",
      },
      enchant: {
        normalScrolls: "Normal Scrolls",
        blessedScrolls: "Blessed Scrolls",
        crystalScrolls: "Crystal Scrolls",
        weaponArmor: "Weapon/Armor:",
        jewelry: "Jewelry:",
        maxEnchant: "Max Enchant:",
        maxEnchantDesc: "+25 para todos los tipos (Weapon, Armor, Jewelry)",
      },
      discord: {
        title: "Únete a nuestra Comunidad",
        description:
          "Conéctate con otros jugadores, obtén soporte y mantente al día con las últimas noticias",
        joinButton: "Unirse a Discord",
      },
    },
    // ─── NEW: Info page translations ────────────────────────────────
    info: {
      title: "INFORMACIÓN DEL SERVIDOR",
      tabs: {
        rates: "Rates",
        enchant: "Enchant",
        vip: "VIP",
        events: "Eventos",
        instances: "Zonas",
        sieges: "Asedios",
        economy: "Economía",
        features: "Features",
        commands: "Comandos",
      },
      patchStatus: {
        xpRate: "XP actual",
        questDropRate: "Drop de quest actual",
        eventsTvt: "Estado TvT",
        eventsCtf: "Estado CTF",
        eventsDm: "Estado DM",
        globalGk: "Global GK",
        substackNoMorph: "Substack no-morph",
      },
      // ── Rates tab ──
      ratesTab: {
        heroKicker: "Vista general",
        heroTitle: "Rates claras y faciles de comparar",
        heroLead:
          "Esta vista separa progreso base, bosses y bonus VIP para que el jugador encuentre enseguida la parte del farmeo o del avance que necesita revisar.",
        baseRates: "Rates Base",
        bossRates: "Rates de Bosses",
        vipBonus: "Bonus VIP",
        vipBonusNote: "Multiplicador adicional sobre las rates base",
        xp: "Experiencia (XP)",
        sp: "SP",
        adena: "Adena",
        drop: "Drop de Items",
        spoil: "Spoil",
        partyXpSp: "Party XP/SP",
        quest: "Quest Reward",
        petXp: "Pet XP",
        rbDrop: "Raid Boss Drop",
        rbSpoil: "Raid Boss Spoil",
        rbAdena: "Raid Boss Adena",
        gbDrop: "Grand Boss Drop",
        gbAdena: "Grand Boss Adena",
        xpSp: "XP/SP",
        dropChance: "Drop Chance",
        spoilChance: "Spoil Chance",
        dropAmount: "Drop Cantidad",
        spoilAmount: "Spoil Cantidad",
      },
      // ── Enchant tab ──
      enchantTab: {
        introKicker: "Sistema de enchant",
        introTitle: "Comparación más limpia por scroll",
        introDesc:
          "Mantuvimos toda la información técnica, pero con más respiración visual para comparar riesgo, rango y probabilidades sin que la tabla se sienta apretada.",
        generalInfo: "Información General",
        safeEnchant: "Safe Enchant",
        safeEnchantDesc: "+3 para todo (+4 para full body armor)",
        safeEnchantFB: "Safe Enchant Full Body",
        maxEnchant: "Enchant Máximo",
        maxEnchantDesc: "+25 (armas, armaduras y joyas)",
        scrollTypes: "Tipos de Scroll",
        normalScroll: "Normal Scroll",
        normalScrollRange: "Rango: +0 a +16",
        normalScrollFail: "Fallo = item DESTRUIDO + cristales devueltos",
        normalScrollWADesc: "Empieza 80%, baja 5% por nivel",
        normalScrollJDesc: "Empieza 90%, baja 4% por nivel",
        blessedScroll: "Blessed Scroll",
        blessedScrollRange: "Rango: +0 a +16",
        blessedScrollFail: "Fallo = item NO se destruye, baja a +0",
        blessedScrollWADesc: "Empieza 90%, baja ~3% por nivel",
        blessedScrollJDesc: "Empieza 85%, baja ~3% por nivel",
        crystalScroll: "Crystal Scroll",
        crystalScrollRange: "Rango: +16 a +25",
        crystalScrollFail:
          "Fallo = NO pasa nada, item queda igual, solo pierdes el scroll",
        crystalScrollWADesc: "Empieza 70%, baja 5% por nivel",
        crystalScrollJDesc: "Empieza 65%, baja 5% por nivel",
        crystalScrollNote:
          "Se obtiene en la tienda NPC con Vote Coins + Raid Tokens + Adena.",
        weaponArmor: "Armas y Armaduras",
        jewelry: "Joyas",
        level: "Nivel",
        chance: "Chance",
        summaryTitle: "Resumen Rápido",
        summaryNormal:
          "Normal: más barato, rates bajas, item se rompe si falla",
        summaryBlessed:
          "Blessed: más caro, rates altas, item baja a +0 si falla",
        summaryCrystal:
          "Crystal: premium, rates moderadas, si falla no pasa nada (solo pierdes el scroll)",
        soulCrystals: "Soul Crystals",
        levelUpChance: "Chance de subir nivel",
        breakChance: "Chance de romper",
        maxLevel: "Nivel máximo",
        augmentation: "Augmentation (Life Stones)",
        skillChance: "Chance de skill",
        noGrade: "No-Grade",
        midGrade: "Mid-Grade",
        highGrade: "High-Grade",
        topGrade: "Top-Grade",
      },
      // ── VIP tab ──
      vipTab: {
        title: "Sistema VIP",
        introKicker: "VIP loop",
        introTitle: "Activación, beneficios y comandos más claros",
        introDesc:
          "Primero ves cómo se activa el VIP, después qué aporta al progreso y por último los comandos útiles para gestionarlo sin dudas.",
        howToActivate: "Cómo activar VIP",
        step1:
          "Obtener un VIP Token (se compra con 20 Titan Coins en la tienda NPC)",
        step2: "Escribir .vip en el chat del juego",
        step3:
          "El token se consume automáticamente y se activa el estado VIP por 7 días",
        benefits: "Beneficios VIP",
        benefitXpSp: "+40% XP/SP sobre la rate base",
        benefitAdena: "+40% Adena sobre la rate base",
        benefitDrop: "+40% Drop chance sobre la rate base",
        benefitSpoil: "+40% Spoil chance sobre la rate base",
        benefitDropAmount:
          "+30% cantidad de items dropeados (no aplica a Raid/Grand Boss)",
        benefitSpoilAmount:
          "+30% cantidad de items spoileados (no aplica a Raid/Grand Boss)",
        benefitBuffs:
          "Buffs gratis en el Buffer NPC (los no-VIP pagan con Event Medals a partir del nivel 52)",
        benefitFreya:
          "+13% más chance de drop de Freya Rose en Daily Instance (32.5% normal vs 45.5% VIP)",
        commands: "Comandos VIP",
        howToGet: "Cómo obtener el VIP Token",
        howToGetDesc1: "Comprar con 20 Titan Coins en la tienda NPC",
        howToGetDesc2:
          "Los Titan Coins se obtienen conquistando Fortalezas (4 por conquista) y Castillos (35 a 135 según castillo) como líder del clan",
      },
      // ── Events tab ──
      eventsTab: {
        introKicker: "Agenda PvP",
        introTitle: "Calendario, estado y reglas separados por evento",
        introDesc:
          "La ficha queda organizada para leer rápido qué evento está activo, qué reglas usa cada modo y qué recompensas están configuradas ahora mismo.",
        schedule: "Horario Completo",
        scheduleNote:
          "TvT activo por horario. CTF y DM quedan temporalmente en pausa.",
        eventActive: "ACTIVO",
        eventInactive: "PAUSADO",
        ctfPaused: "CTF automático desactivado temporalmente",
        dmPaused: "DM automático desactivado temporalmente",
        hour: "Hora",
        event: "Evento",
        joinCommands: "Comandos para participar",
        tvt: "TvT (Team vs Team)",
        ctf: "CTF (Capture the Flag)",
        dm: "DM (Death Match)",
        townWar: "Town War (Guerra en Ciudad)",
        format: "Formato",
        level: "Nivel",
        players: "Jugadores",
        duration: "Duración",
        location: "Ubicación",
        npcRegister: "NPC de registro",
        potions: "Pociones",
        summons: "Summons",
        revive: "Revive",
        healers: "Healers",
        rewards: "Recompensas",
        allowed: "Permitidas",
        notAllowed: "No permitidos",
        tvtFormat: "Blue vs Red (equipos aleatorios)",
        tvtDuration: "5 min registro + 5 min evento",
        tvtLocation: "Aden Colosseum",
        appearsGiran: "Aparece en Giran",
        tvtRevive: "Recuperación completa, delay 5s",
        tvtWin: "Equipo ganador: 25 Event Medals",
        tvtLose: "Equipo perdedor: 15 Event Medals",
        tvtTop: "Top Killer: +15 Event Medals adicionales",
        ctfDuration: "5 min registro + 5 min evento",
        ctfWin: "Equipo ganador: 25 Event Medals",
        ctfLose: "Equipo perdedor: 10 Event Medals",
        dmFormat: "Free-for-all (sin equipos)",
        dmDuration: "5 min registro + 5 min evento",
        dmRevive: "Recuperación completa, delay 10s",
        dmKill: "1 Event Medal por cada kill",
        dmTop: "Top Killer: +15 Event Medals",
        townWarCity: "Giran (se convierte en zona PvP)",
        townWarReward: "1 Event Medal por kill",
        townWarKarma: "Sin karma durante el evento",
        townWarAdmin: "Activado por administradores",
        generalRules: "Reglas generales de eventos",
        configuredRewards: "Recompensas configuradas",
        tvtReward1: "Ganador: 25 Event Medals",
        tvtReward2: "Perdedor: 15 Event Medals",
        tvtReward3: "Kill reward: 1 Event Medal por enemigo derrotado",
        tvtReward4: "Top Killer: +10 Event Medals",
        ctfReward1: "Ganador: 25 Event Medals",
        ctfReward2: "Perdedor: 15 Event Medals",
        ctfReward3:
          "Actualmente el evento automático está en pausa, pero la config guardada ya usa estos valores.",
        dmReward1: "Ganador: 10 Event Medals",
        dmReward2: "Kill reward: 1 Event Medal por kill",
        dmReward3: "Top Killer: +20 Event Medals",
        dmReward4: "Actualmente el evento automático está en pausa.",
        generalKicker: "Antes de entrar",
        generalDesc:
          "Estas restricciones se aplican a todos los modos para evitar cruces con Olympiad, dual-box abusivo o ventanas de asedio.",
        rule1: "No se puede participar si estás en Olympiad u otro evento",
        rule2: "Restricción de dual-box en eventos",
        rule3: "Los eventos no se ejecutan durante asedios de castillo",
      },
      // ── Instances tab ──
      instancesTab: {
        title: "Instancias Diarias",
        instancesSectionTitle: "Instancias diarias",
        instancesSectionDesc: "Contenido con tiempo y reglas de instancia.",
        activeInstancesLabel: "Instancias activas",
        dailyResetLabel: "Reset diario",
        keyCommandLabel: "Comando clave",
        customZoneSectionTitle: "Zona custom",
        customZoneSectionDesc: "Zona abierta de farmeo/PvP con balance propio.",
        howItWorks: "Cómo funciona",
        desc1: "Zonas de farmeo con tiempo limitado que se resetean cada día",
        desc2: "El tiempo se pausa cuando el jugador sale o se desconecta",
        desc3: "Reset diario a las 06:30 AM (hora del servidor)",
        desc4:
          "Los jugadores en la misma instancia comparten la zona y pueden hacer party",
        paganTemple: "Instancia: Pagan Temple",
        maxTime: "Tiempo máximo por día",
        maxTimeVal: "60 minutos",
        maxEntries: "Entradas máximas por día",
        maxEntriesVal: "1",
        levelRange: "Rango de nivel",
        levelRangeVal: "1 - 80",
        mobCount: "Cantidad de mobs",
        mobCountVal: "~228 mobs",
        mobTypes: "Tipos de mobs",
        mobTypesVal:
          "Chapel Guard, Triol's Layperson, Triol's Believer, Triol's Priest, Ritual Offering",
        exitLocation: "Ubicación de salida",
        exitLocationVal: "Rune Castle Town",
        drops: "Drops de la instancia",
        adena: "Adena: 130,000 - 170,000 por mob (70% chance)",
        freyaRose: "Freya Rose Red Potion: 32.5% normal / 45.5% VIP",
        titansBoxDrop: "Titan’s Box: 10% normal / 14% VIP",
        commands: "Comandos",
        restrictions: "Restricciones",
        restrict1:
          "No se puede usar Scroll of Escape ni /unstuck (usar .daily exit)",
        restrict2: "Si mueres: respawneas en la ciudad",
        restrict3:
          "Si te desconectas: el tiempo se pausa y al reconectar apareces en Giran",
        restrict4: "No se puede entrar si ya estás dentro de otra instancia",
        neutralZoneTitle: "Neutral Zone (rework)",
        neutralZoneIntro:
          "Zona PvP activa con ajustes de flujo, mobs y economía.",
        neutralIdentity: "Zona con identidad PvP más clara y consistente.",
        neutralMonsters: "Población renovada con monstruos custom.",
        neutralFlow: "Ajustes de presión de combate y ritmo de farmeo.",
        neutralFlag: "Comportamiento de PvP flag más confiable.",
        neutralDrops: "Drops y spoils reajustados para progresión crafteo.",
        neutralDropSummaryTitle: "Drops (Neutral Zone)",
        neutralDropSummaryDrop:
          "Drop: Adena + materiales de crafteo (Mold Glue/Lubricant/Hardener, Enria, Asofe, Thons, Varnish of Purity, Synthetic Cokes, Compound Braid, Mithril Alloy, Durable Metal Plate, Blacksmith's Frame, High Grade Suede, Oriharukon Ore, Mithril Ore, Adamantite Nugget, Oriharukon).",
        neutralDropSummarySpoil:
          "Spoil: Sealed gear/jewelry A-S (Draconic Leather, Imperial Crusader, Major Arcana).",
        neutralDropSummaryMobs:
          "Referencia rápida útil para ubicar la zona y planear el farmeo.",
        dailyRewardsTitle: "Rewards diarios actualizados",
        rewardAdena: "Adena",
        rewardFreyaRose: "Freya Rose Red Potion",
        rewardTitansBox: "Titan’s Box",
        titansBoxExtractable:
          "Titan’s Box fue añadido al sistema de extractables del servidor.",
      },
      // ── Sieges tab ──
      siegesTab: {
        fortresses: "Fortalezas",
        fortressInfo: "Información General",
        fortressCount: "21 fortalezas distribuidas por todo el mapa",
        fortressDuration: "Duración del asedio: 60 minutos",
        fortressClanLevel: "Nivel de clan mínimo: 4",
        fortressCost: "Costo de registro: 250,000 Adena",
        howItWorks: "Cómo funciona el asedio",
        siege1: "El clan atacante se registra pagando 250,000 Adena",
        siege2: "Se anuncian los asedios a las 24h, 1h, 10min y 5min antes",
        siege3:
          "Al iniciar: se abren puertas, aparecen guardias y 4 comandantes",
        siege4: "Los atacantes deben matar los 4 comandantes de la fortaleza",
        siege5: "Al morir todos los comandantes, aparece una Combat Flag",
        siege6: "Un atacante debe capturar (Engrave) la flag para ganar",
        conquestRewards: "Recompensas por conquista",
        reward1: "2 Titan Coins para el líder del clan conquistador",
        reward2: "+500 puntos de reputación de clan para el nuevo dueño",
        reward3: "+250 puntos de reputación si el clan defiende exitosamente",
        ownerBenefits: "Beneficios del dueño",
        benefit1:
          "Wyvern Manager: el líder puede montar Wyvern (10 Crystal B-Grade, Strider 55+)",
        benefit2: "Buffer NPC dentro de la fortaleza",
        benefit3: "Control de puertas de la fortaleza",
        fortressList: "Lista de Fortalezas (21)",
        castleSieges: "Asedios de Castillo",
        castleDuration: "Duración",
        castleDurationVal: "120 minutos",
        castleFlags: "Flags máximas",
        castleFlagsVal: "2",
        castleClanLevel: "Nivel de clan mínimo",
        castleClanLevelVal: "5",
        castleAttackerRespawn: "Respawn atacante",
        castleAttackerRespawnVal: "10 segundos",
        castleDefenderRespawn: "Respawn defensor",
        castleDefenderRespawnVal: "30 segundos",
        castleTeleport: "Teleport a asedio",
        castleTeleportVal: "Permitido",
        castleConquestRewards: "Recompensas por conquista",
        castleReward1:
          "35 a 135 Titan Coins para el líder del clan conquistador según el castillo",
        castleList: "Castillos",
      },
      // ── Economy tab ──
      economyTab: {
        introKicker: "Mapa de economía",
        introTitle: "Monedas, loops y tiendas mejor separadas",
        introDesc:
          "La lectura empieza por la moneda, sigue por la tienda o reward asociada y termina con los loops que conectan PvP, bosses, voting y progresión.",
        lettersIntro:
          'La nueva daily <code class="bg-black/40 text-yellow-400 px-2 py-0.5 rounded text-xs">.daily enter 2</code> entrega Adena y letras L2 Day. Esas letras se cambian en <strong>Paul Merchant</strong> por multisells A-grade.',
        lettersCombos:
          'Junta letras para formar palabras y canjearlas directamente en Paul Merchant. Las combinaciones activas son <strong>WEAPON</strong>, <strong>SHIELD</strong>, <strong>YEWELLS</strong> y <strong>ARMORS</strong>. Algunas recetas top también piden el item especial <strong>II</strong>.',
        lettersRequired: "Letras requeridas",
        lettersExchange: "Canje:",
        lettersFootnote:
          'La receta top usa el item especial <strong>II</strong>. No existe letra J en cliente.',
        currencies: "Monedas del Servidor",
        pvpCoin: "PVP Coin",
        pvpCoinSource: "1 por cada PvP kill",
        eventMedal: "Event Medal",
        eventMedalSource: "En eventos PvP configurados y Town War",
        raidToken: "Raid Token",
        raidTokenSource: "Drop de todos los Raid Bosses y Grand Bosses",
        voteCoin: "Vote Coin",
        voteCoinSource:
          "Votando en HopZone / TopZone / L2Network / L2JBrasil / Top100Arena",
        titanCoin: "Titan Coin",
        titanCoinSource:
          "4 por Fortaleza y 35-135 por Castillo según el castillo (líder del clan)",
        vipToken: "VIP Token",
        vipTokenSource: "Comprando con 20 Titan Coins",
        crystalScrollShop: "Tienda de Crystal Scrolls",
        crystalScrollNote:
          "Si falla no baja ni destruye el item; solo se consume el scroll. Requiere Vote Coins + Raid Tokens + Adena.",
        weaponScrolls: "Crystal Scrolls de Arma",
        armorScrolls: "Crystal Scrolls de Armadura",
        grade: "Grade",
        specialShop: "Tienda Especial",
        withTitanCoins: "Con Titan Coins",
        withEventMedals: "Con Event Medals",
        withVoteCoins: "Con Vote Coins",
        soulCrystal11: "Soul Crystal Lv. 11",
        soulCrystal12: "Soul Crystal Lv. 12",
        soulCrystal13: "Soul Crystal Lv. 13",
        redPipetteKnife: "Red Pipette Knife",
        proofOfBlood: "Proof of Blood",
        proofOfAlliance: "Proof of Alliance",
        proofOfAspiration: "Proof of Aspiration",
        lifeStone52: "Life Stone Top-Grade Lv. 52",
        lifeStone61: "Life Stone Top-Grade Lv. 61",
        lifeStone67: "Life Stone Top-Grade Lv. 67",
        lifeStone76: "Life Stone Top-Grade Lv. 76",
        freyaRosePotion: "Freya Rose Red Potion",
        titansBoxTitle: "Titan’s Box Rewards",
        titansBoxDesc: "Chance oficial de rewards por apertura de Titan’s Box.",
        titansBoxItemId: "Item",
        titansBoxItemName: "Reward",
        titansBoxQty: "Qty",
        titansBoxChance: "%",
        titansBoxTotal: "Total: 100%",
        shirtsTitle: "Sistema de Shirts (Camisas)",
        shirtsDesc:
          "Items equipables que dan bonificaciones progresivas de P.Atk, M.Atk y PvP Damage. Para subir de nivel hay que entregar la camisa anterior.",
        shirtLevel: "Nivel",
        shirtStats: "Stats",
        shirtPrice: "Precio",
        raidTokens: "Raid Tokens por Boss",
        raidTokensDesc:
          "Todos los Raid Bosses y Grand Bosses dropean Raid Tokens.",
        raidBoss: "Boss",
        raidTotalFinal: "Total final",
        raidDistribution: "Distribución final",
        normalRB: "Raid Bosses normales",
        queenAnt: "Queen Ant",
        orfen: "Orfen",
        zaken: "Zaken",
        baium: "Baium",
        antharas: "Antharas",
        valakas: "Valakas",
        flowTitle: "Flujo Económico",
        flow1: "PvP Kills → PVP Coins → Shirts",
        flow2: "Eventos → Event Medals → Soul Crystals / Life Stones / Buffs",
        flow3: "Raid Bosses → Raid Tokens → Crystal Scrolls",
        flow4: "Votación → Vote Coins → Crystal Scrolls",
        flow5: "Fortalezas/Castillos → Titan Coins → VIP Token → VIP 7 días",
        source: "Fuente",
        use: "Uso",
      },
      // ── Features tab ──
      featuresTab: {
        introKicker: "Features del servidor",
        introTitle: "SubStack, AutoFarm, PvP y utilidades in-game",
        introDesc:
          "Esta pestaña resume NPCs custom, SubStack Manager, AutoFarm, anuncios de raid, Community Board, Olympiad y el resto de sistemas publicados. Si llegaste buscando un servidor Lineage 2 con SubStack, también tenemos una página dedicada con FAQ y enlaces rápidos.",
        substackPageLink: "Página SubStack: qué es el sistema y enlaces útiles",
        customNpcs: "NPCs Custom",
        autoFarm: "AutoFarm avanzado",
        autoFarmDesc1: "Modos disponibles: Auto / Fighter / Mage",
        autoFarmDesc2:
          "Assist, Assist Leader Strict y Summon Assist para juego en party",
        autoFarmDesc3: "Filtros: only attacked targets y respectful hunting",
        autoFarmDesc4:
          "Ajuste de radio y cooldowns por categoria (attack/debuff/buff)",
        bufferNpc: "Buffer NPC",
        bufferDesc1:
          "Categorías: Prophet, Chants, Prophecies, Summons, Resistances, Pa'agrio, Dances, Songs",
        bufferDesc2: "Gratis para nivel 52 o menos y para jugadores VIP",
        bufferDesc3: "Los demás pagan con Event Medals (1 por buff)",
        bufferDesc4: "5 esquemas de buffs guardables por personaje",
        bufferDesc5: "Presets rápidos: Fighter y Mage",
        bufferDesc6:
          "Restauración de CP/HP/MP y opción de cancelar todos los buffs",
        substackManager: "Substack Manager",
        substackDesc1:
          "SubStack = clase base +1: agregás una subclase sobre tu clase actual sin que la base deje de ser tu clase principal.",
        substackDesc2: "Nivel mínimo: 76",
        substackDesc3: "Quest gestionada por el SubStack Manager en Giran",
        substackDesc4:
          "No-morph: no cambia tu cuerpo ni “convierte” la base en otra clase; solo incorporás skills de la subclase.",
        substackDesc5:
          "Ejemplo ilustrativo: combinaciones tipo adventurer + Sword Muse para ampliar utilidad; el foco es acumular skills, no mutar la clase base.",
        noblesseTrader: "Noblesse flexible",
        noblesseDesc1:
          "Disponible por ruta de quest completa o por kill de Barakiel según config.",
        noblesseDesc2:
          "Se mantiene la vía clásica y se habilita progreso alternativo.",
        clanManager: "Clan Manager",
        clanDesc1:
          "Otorga Clan Level 8 y 3,000,000 de reputación por Gold Bars",
        clanDesc2: "Requisito: líder Noble",
        raidbossInfo: "Raidboss Announcement",
        raidbossDesc1: "Anuncia la aparición de Raid Bosses en el servidor",
        raidbossDesc2: "Muestra información del boss y su ubicación",
        pvpSystem: "Sistema de PvP",
        pvpRewards: "Recompensas PvP",
        pvpReward1: "1 PVP Coin por cada PvP kill",
        pvpReward2:
          "Sistema anti-farm activo: verifica party, IP, clan y alianza",
        pkPenalties: "Penalidades PK (jugadores con Karma)",
        pkDesc1: "No se dropean items al morir en PvP normal",
        pkDesc2: "Solo los PKs (con Karma) dropean items:",
        pkDropLimit: "Límite: 10 items",
        pkDropChanceGeneral: "Chance de drop general: 40%",
        pkDropChanceNormal: "Chance de item normal: 50%",
        pkDropChanceEquip: "Chance de equipo: 40%",
        pkDropChanceWeapon: "Chance de arma: 10%",
        pkDropMinKills: "PKs mínimos para empezar a dropear: 5",
        olympiad: "Olympiad",
        olympiadStartTime: "Horario de inicio",
        olympiadStartTimeValue: "18:00 (hora del servidor)",
        olyDuration: "Duración de batalla",
        olyDurationVal: "6 minutos",
        olyPeriod: "Periodo",
        olyPeriodVal: "Cada 2 semanas",
        olyClassed: "Participantes Classed",
        olyClassedVal: "Mínimo 5",
        olyNonClassed: "Participantes Non-Classed",
        olyNonClassedVal: "Mínimo 9",
        olyReward: "Recompensa por victoria",
        olyRewardVal: "Gate Pass — 50 Classed, 30 Non-Classed",
        olyMaxEnchant: "Enchant máximo",
        olyMaxEnchantVal: "+25",
        olyAugment: "Augmentación",
        olyAugmentVal: "Permitida",
        olyRestricted: "Items restringidos",
        olyRestrictedVal: "Pociones de heal y scrolls de escape",
        olyCountdown: "Countdown de teleport",
        olyCountdownVal: "60 segundos",
        olySkills: "Skills recargados",
        olySkillsVal: "Sí (antes y después del combate)",
        classBalanceTitle: "Balance PvP v1.1.1",
        tankVsFighter: "Tanques vs Fighters: +30% daño",
        tankVsMage: "Tanques vs Mages: +25% daño",
        heavyVsMage:
          "Duelist/Dreadnought/Titan/GK/FS/Maestro vs Mages: hasta +20%",
        daggerArcherVsMage: "Daggers/Archers/BD-SWS line vs Mages: +15%",
        magicCritCap: "M.Crit Rate máximo: 350",
        magicCritPower: "Magic Critical Power: 2.8x",
        magicFailures: "MagicFailures desactivado para casteo más consistente",
        totemRework:
          "Totems rework: bonus completo con Fist/Dual Fist y reducido con otras armas",
        classMaster3rd:
          "Class Master habilita 3ra clase con costo y recompensa configurada",
        globalGkUpdate:
          "Global GK activo con menú renovado y utilidades/farm zones nuevas",
        heroCustom: "Hero Custom",
        heroDesc1:
          "Existe un item consumible que otorga Hero temporal por días (configurable)",
        heroDesc2:
          "Los Heroes pueden elegir 1 arma Hero en los Monumentos de Heroes",
        heroDesc3:
          "Los Heroes reciben automáticamente el Wings of Destiny Circlet",
        otherFeatures: "Otras Features",
        expToggle:
          "Control de EXP: usa .exp para activar o pausar ganancia según tu objetivo",
        topRanking:
          "Ranking in-game: .top muestra PvP/PK paginado para seguir tu progreso",
        dropCommand:
          "Vista de drops: con target + Ctrl+Shift ves drop/spoil al momento",
        balanceUpdates:
          "Balance y asedios con ajustes frecuentes para mantener el meta activo",
        autoLearn:
          "Auto Learn Skills: Los skills se aprenden automáticamente al subir de nivel",
        subclassNoQuest:
          "Subclass sin Quests: Se puede cambiar de subclass sin hacer las quests originales (excepto 3ra clase)",
        offlineShop:
          "Offline Shop: Al montar una tienda y salir del juego, la tienda permanece abierta",
        antiFarm:
          "Anti-Farm PvP: Verificación de Party, IP, Clan y Alianza para evitar farmeo",
        weight:
          "Peso x3: El límite de peso del inventario es 3 veces el original",
        shiftClick:
          "Shift+Click en Mobs: Los jugadores pueden ver stats y droplist de los mobs",
      },
      // ── Commands tab ──
      commandsTab: {
        title: "Todos los Comandos",
        catVip: "VIP",
        catInstances: "Instancias Diarias",
        catEvents: "Eventos",
        catRankings: "Rankings",
        catVote: "Votación",
        catTeleport: "Teleport",
        catBank: "Banco",
        catMarriage: "Matrimonio",
        catUtilities: "Utilidades",
        cmdVipActivate: "Activar VIP (consume 1 VIP Token del inventario)",
        cmdVipInfo: "Ver tiempo restante de VIP",
        cmdDaily: "Menú principal de instancias diarias",
        cmdDailyWatch: "Ver información detallada de una instancia",
        cmdDailyEnter: "Entrar a una instancia",
        cmdDailyExit: "Salir de la instancia actual (no disponible en combate)",
        cmdJoin: "Unirse al evento activo (TvT, CTF o DM)",
        cmdLeave: "Abandonar el evento",
        cmdTop: "Menú de rankings",
        cmdTopPvp: "Top jugadores por PvP kills (paginado)",
        cmdTopPk: "Top jugadores por PK kills (paginado)",
        cmdVote: "Votar en las páginas de tops (HopZone, TopZone, L2Network)",
        cmdVotePoints: "Ver puntos de voto acumulados",
        cmdGetVoteReward: "Canjear puntos de voto por recompensas",
        cmdVoteTime: "Ver cuándo puedes votar de nuevo",
        cmdGlobalGk: "Abrir Global GK con teleports y zonas custom",
        cmdFarm1: "Teleport a zona de farmeo 1",
        cmdFarm2: "Teleport a zona de farmeo 2",
        cmdPvp1: "Teleport a zona PvP 1",
        cmdPvp2: "Teleport a zona PvP 2",
        cmdBank: "Ver información de conversión Adena / Gold Bars",
        cmdDeposit: "Convertir Adena a Gold Bars",
        cmdWithdraw: "Convertir Gold Bars a Adena",
        cmdEngage: "Proponer matrimonio (target debe estar en lista de amigos)",
        cmdDivorce: "Divorciarse",
        cmdGotolove:
          "Teleportarse a tu esposo/a (costo de adena + tiempo de casteo)",
        cmdOnline: "Ver cantidad de jugadores conectados",
        cmdAway: "Activar estado AFK (con mensaje opcional)",
        cmdBack: "Desactivar estado AFK",
        cmdOfflineShop: "Convertir tienda privada en tienda offline",
        cmdExp: "Activar o desactivar ganancia de EXP",
        cmdAutoFarm:
          "Abrir o usar el sistema AutoFarm configurado del servidor",
        cmdDrop: "Ver drop y spoil con target + Ctrl+Shift",
        cmdRepair: "Reparar personaje buggeado (lo mueve a Floran Village)",
        cmdStat: "Ver estadísticas del jugador seleccionado",
        cmdStats: "Ver kills en eventos del jugador seleccionado",
      },
      overview: {
        title: "L2Titan Interlude x25 - Parche 1.3 activo",
        intro1:
          "Un servidor pensado para jugadores que valoran una buena experiencia en Lineage 2.",
        intro2:
          "Comunidad activa, herramientas útiles y un entorno competitivo para jugar en equipo.",
        sectionTitle: "Lo más importante para jugar mejor",
        substackTitle: "SubStack",
        substackDesc:
          "Base +1: una subclase encima de tu clase base sin reemplazarla (ej. adventurer + Sword Muse). La base no muta; sumás skills. No-morph en servidor.",
        autofarmTitle: "AutoFarm avanzado",
        autofarmDesc:
          "Configura modos, assist, filtros y radio para que el personaje actue como vos queres.",
        expControlTitle: ".exp",
        expControlDesc:
          "Activa o pausa la EXP para controlar tu rango, objetivos y ritmo de progreso.",
        eventsTitle: "Eventos con .join/.leave",
        eventsDesc:
          "TvT activo con entrada rápida. CTF y DM quedan temporalmente en pausa.",
        dailyTitle: "Daily Instances",
        dailyDesc:
          "Con .daily ves info, tiempo restante y gestionas entrada/salida sin perder ciclos.",
        rankingTitle: "Ranking .top",
        rankingDesc:
          "Consulta ranking PvP/PK paginado in-game y segui tu posicion competitiva.",
        dropViewTitle: "Vista de drops",
        dropViewDesc:
          "Con target + Ctrl+Shift revisas drop/spoil al instante para decidir mejor donde farmear.",
        vipTitle: "VIP",
        vipDesc:
          "Gestiona estado y tiempo con .vip/.vipinfo y aprovecha beneficios definidos.",
        bufferTitle: "Buffer Manager",
        bufferDesc:
          "Presets Fighter/Mage, restore HP/CP/MP, cancel y schemes para prepararte rápido.",
        balanceTitle: "Balance y siege",
        balanceDesc:
          "Updates frecuentes para mantener peleas y asedios en movimiento.",
        whyTitle: "Por que jugar aquí",
        whyClarity:
          "Herramientas claras que ahorran tiempo sin quitar profundidad.",
        whyCommands:
          "Comandos útiles para progreso, eventos y competencia en un solo lugar.",
        whyUpdates:
          "Proyecto activo con ajustes frecuentes de balance y siege.",
        ctaTitle: "Listo para entrar?",
        ctaDesc:
          "Unite al Discord para novedades y soporte. Descarga el cliente y empeza hoy.",
      },
      // ── Discord CTA (reused) ──
      discord: {
        title: "Únete a nuestra Comunidad",
        description:
          "Conéctate con otros jugadores, obtén soporte y mantente al día con las últimas noticias",
        joinButton: "Unirse a Discord",
      },
    },
    news: {
      title: "Últimas Noticias",
      viewAll: "Ver todas las noticias",
      readMore: "Leer más →",
      backButton: "Volver",
      indexMetaTitle: "Noticias L2Titan — parches, eventos y balance",
      indexMetaDescription:
        "Historial de noticias del servidor Lineage 2 Interlude x25 L2Titan: parches, eventos de jefes, asedios, cambios de balance y anuncios de temporada.",
      indexSectionHeading: "Noticias de L2Titan",
      indexHeroTitle: "Noticias, parches y eventos del servidor",
      indexHeroIntro:
        "Aquí se publican cambios que afectan al meta (balance, economía, instancias) y avisos de eventos. Para sistemas fijos del servidor usa también las guías enlazadas abajo.",
      cardReadPrefix: "Leer:",
      relatedNavAria: "Guías relacionadas con las noticias",
      relatedTitle: "Guías que complementan las noticias",
      relatedIntro:
        "Cuando un parche toca economía, PvP o instancias, suele haber una página estática con el contexto completo.",
      relatedFeatures: "Features y sistemas",
      relatedEconomy: "Economía",
      relatedEvents: "Eventos PvP",
      relatedWikiInfo: "Wiki /info",
      relatedDownloads: "Descargar cliente",
      articleBackToNews: "Volver a noticias",
      articleContinueReading: "Seguir leyendo",
      articleLinkDownloads: "Descargar cliente Lineage 2 Interlude",
      articleLinkFeatures: "Features: SubStack, AutoFarm y herramientas",
      articleLinkFaq: "FAQ para jugadores nuevos",
      articleLinkWiki: "Wiki / centro de información",
      articleCtaDownload: "Descargar cliente",
      items: {
        infinitumTower: {
          title: "Infinitum Tower y letras L2 Day ya visibles en la web",
          summary:
            "La web ahora muestra la daily nueva de letras, su acceso real con .daily enter 2 y los cambios de Paul Merchant.",
          content:
            "Se alineo la información publica con la configuración real del servidor: Infinitum Tower aparece como daily activa, se explican las letras L2 Day y se aclaran los cambios de Paul Merchant para armas, sets, escudos y joyas A-grade.",
        },
        patchV1: {
          title: "Patch v1 - Combate, offline shop y estabilidad",
          summary:
            "Se aplicaron fixes de combate, tienda offline persistente, ajustes de Olympiad, pets y mejoras anti-crash/anti-bot.",
          content:
            "El patch v1 corrige interacciones críticas de combate (heal, lethal, CP, MP reflect, revive en asedio y cancel), habilita offline shop con persistencia en DB y suma mejoras de estabilidad de servidor, anti-DoS y geodata base.",
        },
        patchV1Qol: {
          title: "Patch v1 QoL - Drop, voto, Buffer y Substack UI",
          summary:
            "Mejoras en .drop, sistema de voto, RateDropQuest x1.20, Global GK y ajustes de movimiento/geodata.",
          content:
            "Se optimizó el flujo de progreso con .drop más claro, voto más justo por plataforma, mejoras de UI en Buffer/Substack, CTF/DM en pausa temporal (TvT activo), y ajustes de estabilidad para movimientos inválidos.",
        },
        patch13: {
          title: "Patch 1.3 - Neutral Zone y Titan Box",
          summary:
            "Global GK mejorado, Neutral Zone rework, rewards diarios actualizados y progresión Noblesse flexible.",
          content:
            "Gameplay update activo: Global GK con navegación simplificada, menú de utilidades y farm zones (Neutral Zone/Beast Farm), además de navegador de Raid Boss por rangos (sin épicos). Neutral Zone recibió rework de flujo PvP, mobs custom y economía drop/spoil ajustada. Daily ahora recompensa Adena, Freya Rose y Titan’s Box (integrada a extractables). Noblesse ahora soporta ruta de quest completa o progresión alternativa por Barakiel según configuración del servidor.",
        },
        patch111: {
          title: "Patch 1.3.1 - Balance PvP y magia",
          summary:
            "Se aplicó tuning por matchups PvP, ajustes de totems, cap de magic crit y casteo más confiable.",
          content:
            "Tanques y líneas melee recibieron ajustes específicos contra ciertos arquetipos. Totems de Grand Khavatari ya no quedan bloqueados fuera de fist, con bonus escalado. También se ajustó M.Crit (cap 350, power 2.8x) y se desactivaron fallos mágicos para mejorar consistencia.",
        },
        patchQol: {
          title: "Patch QoL - Economy, voto y sistemas",
          summary:
            "Drop Viewer, sistema de voto, Buffer/Substack UI y economía fueron actualizados para mejorar progresión y claridad.",
          content:
            "La temporada incorpora mejoras de QoL: .drop más claro, voto con validación más justa, shop Event/Vote/Titan reequilibrada, Class Master para 3ra clase y más fixes de estabilidad en movimiento/geodata.",
        },
        castleConquest: {
          title: "Conquista de castillo - sábado pasado",
          summary:
            "Resumen de la conquista del castillo del sábado pasado con impacto en la economía del servidor.",
          content:
            "La conquista del castillo del sábado pasado quedó registrada con recompensas de Titan Coins para el líder del clan ganador. Este logro impacta el ciclo de progresión VIP y el control estratégico de la temporada.",
        },
        baiumEvent: {
          title: "Próximo evento: Baium",
          summary:
            "Se viene evento especial de Baium. Publicaremos hora exacta, reglas y rewards en el próximo anuncio.",
          content:
            "Evento en preparación: Baium. Apenas nos compartas la imagen oficial y horario final, actualizamos esta noticia con el arte definitivo, ventana de registro y reglas completas.",
        },
      },
    },
    common: {
      loading: "Cargando...",
    },
    status: {
      game: "Juego",
      login: "Login",
      online: "Online",
      offline: "Offline",
    },
    a11y: {
      skipToContent: "Saltar al contenido",
    },
    error: {
      notFoundTitle: "Página no encontrada",
      notFoundDescription: "La página que buscas no existe o ha sido movida.",
      backHome: "Volver al inicio",
    },
  },
  en: {
    navbar: {
      home: "Home",
      downloads: "Downloads",
      more: "More",
      substack: "SubStack",
      info: "Info",
      news: "News",
      faq: "FAQ",
      registro: "Account",
      community: "Community",
      vote: "Vote",
      discord: "Discord",
      socialMedia: "Social Media",
      language: "Language",
    },
    home: {
      hero: "Interlude x25",
      downloadClient: "Download Client",
      joinDiscord: "Join Discord",
      heroPromo: {
        badge: "Season live",
        title: "For clans that want real progression",
        desc: "SubStack, AutoFarm, events and an active economy in a server built to last. Join with clear information from day one.",
        cta: "View Full Info",
        registroCta: "No web registration: create your account on first login",
        trust: {
          noWipe: "No wipe",
          antiDdos: "Anti-DDoS",
          autoAccount: "Auto Create Account",
          activeDiscord: "Active Discord",
        },
      },
      guidesDeepLink: {
        kicker: "Documentation",
        headline: "Information hub",
        hint: "Index at /info: rates, features, economy, commands and instances. Each topic has its own landing URL to share.",
        cta: "Server wiki",
        linkSub: "Full index and per-section landings.",
        action: "Go to index",
      },
      quickNav: {
        title: "Quick links",
        downloads: "Download client",
        features: "Server features",
        rates: "x25 rates",
        faq: "FAQ",
        news: "News",
        community: "Community",
      },
      featuresSection: {
        title: "Server highlights",
      },
      infoStrip: {
        title: "Want the full server breakdown?",
        description:
          "Rates, commands, events, daily, economy, VIP and clear rules in one place.",
        cta: "View Full Info",
      },
      features: {
        cumulative: {
          title: "Real SubStack",
          description:
            "Base +1 model: you add a subclass on top of your base without replacing it (e.g. adventurer + Sword Muse). Your base does not mutate—subclass skills stack.",
        },
        economy: {
          title: "Economy and progression",
          description:
            "Currencies, Titan Box and shops with a clear loop between farming, PvP and bosses.",
        },
        events: {
          title: "Configurable AutoFarm",
          description:
            "Modes, assist, filters and radius controls for full farming control.",
        },
      },
    },
    countdown: {
      title: "Server Online",
      subtitle: "Season Active",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      serverOpen: "Server Open",
      playNow: "Bring your friends, rally your clan and jump into the fight.",
    },
    downloads: {
      title: "DOWNLOAD CENTER",
      accountNotice: {
        title: "Auto Create Account enabled",
        description:
          "No website registration is required. Your account is created automatically the first time you log into the game.",
      },
      quickStart: {
        title: "Quick start steps",
        step1: "Download the Full Client or the Launcher.",
        step2: "Extract the game files and open L2TitanLauncher.",
        step3: "Log into the game with any username and password you want.",
        step4:
          "Your account is created automatically on first login (Auto Create Account).",
      },
      table: {
        file: "File",
        size: "Size",
        type: "Type",
        action: "Action",
      },
      download: "Download",
      requirements: {
        minimum: "MINIMUM",
        recommended: "RECOMMENDED",
        requirements: "REQUIREMENTS",
      },
      fileNames: {
        fullClient: "Full Client",
        launcher: "Launcher",
      },
      relatedDocs: {
        kicker: "After you download",
        title: "Related documentation",
        subtitle:
          "Install the client, then jump into rates, features and the community — everything is linked so you stay oriented.",
        wikiCta: "Server wiki",
        wikiHint:
          "Index at /info: rates, VIP, economy, commands and instances.",
        wikiAction: "Go to index",
        features: "Server features",
        rates: "x25 rates",
        community: "Discord & community",
        news: "News",
        navAria: "Useful links after installing the client",
        quickLinksLabel: "Quick links",
      },
    },
    footer: {
      voteForUs: "Vote for us",
      characterName: "Character name",
      enterCharName: "Enter your character name",
      l2jbrasilExactNameRule:
        "Name must match exactly the same character used in .vote.",
      voteSubmit: "Vote",
      closeModal: "Close",
      copyright: "L2Titan.com.",
      linkSubstack: "SubStack",
      linkRates: "Rates",
      linkDownloads: "Downloads",
      linkSubstackEn: "SubStack (EN)",
      linkFaq: "Player FAQ",
      linkAccount: "Create account (Auto Create)",
      linkCommunity: "Community & Discord",
      linkFeatures: "Server features",
      linkNews: "News & patches",
    },
    rates: {
      title: "SERVER INFORMATION",
      serverRates: "SERVER RATES",
      gameFeatures: "GAME FEATURES",
      enchantRates: "ENCHANT RATES",
      rates: {
        experience: "Experience (XP)",
        skillPoints: "Skill Points (SP)",
        partyXP: "Party XP",
        partySP: "Party SP",
        adena: "Adena",
        dropItems: "Drop Items",
        spoil: "Spoil",
        sealStones: "Seal Stones",
        manor: "Manor",
      },
      features: {
        chronicle: "Chronicle: Interlude",
        antiBot: "Anti-Bot: SmartGuard",
        geodata: "Geodata: Premium",
        sieges: "Sieges: Weekly",
        olympiad: "Olympiad: Every 2 weeks",
        subStack:
          "SubStack: base class +1 (subclass on top of base without replacing it; e.g. adventurer + Sword Muse). Base does not mutate—skills from the subclass stack.",
      },
      philosophy: {
        title: "L2Titan Philosophy",
        description:
          "It is a cumulative subclasses model where for each class you can combine your skills with other classes.",
      },
      enchant: {
        normalScrolls: "Normal Scrolls",
        blessedScrolls: "Blessed Scrolls",
        crystalScrolls: "Crystal Scrolls",
        weaponArmor: "Weapon/Armor:",
        jewelry: "Jewelry:",
        maxEnchant: "Max Enchant:",
        maxEnchantDesc: "+25 for all types (Weapon, Armor, Jewelry)",
      },
      discord: {
        title: "Join our Community",
        description:
          "Connect with other players, get support and stay up to date with the latest news",
        joinButton: "Join Discord",
      },
    },
    // ─── NEW: Info page translations (EN) ───────────────────────────
    info: {
      title: "SERVER INFORMATION",
      tabs: {
        rates: "Rates",
        enchant: "Enchant",
        vip: "VIP",
        events: "Events",
        instances: "Zones",
        sieges: "Sieges",
        economy: "Economy",
        features: "Features",
        commands: "Commands",
      },
      patchStatus: {
        xpRate: "Current XP",
        questDropRate: "Current quest drop",
        eventsTvt: "TvT status",
        eventsCtf: "CTF status",
        eventsDm: "DM status",
        globalGk: "Global GK",
        substackNoMorph: "Substack no-morph",
      },
      ratesTab: {
        heroKicker: "Overview",
        heroTitle: "Rates that are easy to scan and compare",
        heroLead:
          "This layout splits base progression, boss multipliers and VIP bonus so you can jump straight to the farming or pacing section you care about.",
        baseRates: "Base Rates",
        bossRates: "Boss Rates",
        vipBonus: "VIP Bonus",
        vipBonusNote: "Additional multiplier on top of base rates",
        xp: "Experience (XP)",
        sp: "SP",
        adena: "Adena",
        drop: "Item Drop",
        spoil: "Spoil",
        partyXpSp: "Party XP/SP",
        quest: "Quest Reward",
        petXp: "Pet XP",
        rbDrop: "Raid Boss Drop",
        rbSpoil: "Raid Boss Spoil",
        rbAdena: "Raid Boss Adena",
        gbDrop: "Grand Boss Drop",
        gbAdena: "Grand Boss Adena",
        xpSp: "XP/SP",
        dropChance: "Drop Chance",
        spoilChance: "Spoil Chance",
        dropAmount: "Drop Amount",
        spoilAmount: "Spoil Amount",
      },
      enchantTab: {
        introKicker: "Enchant system",
        introTitle: "A cleaner per-scroll comparison",
        introDesc:
          "We kept all the technical detail, just with more visual breathing room to compare risk, range and odds without the table feeling cramped.",
        generalInfo: "General Information",
        safeEnchant: "Safe Enchant",
        safeEnchantDesc: "+3 for all (+4 for full body armor)",
        safeEnchantFB: "Safe Enchant Full Body",
        maxEnchant: "Max Enchant",
        maxEnchantDesc: "+25 (weapons, armor and jewelry)",
        scrollTypes: "Scroll Types",
        normalScroll: "Normal Scroll",
        normalScrollRange: "Range: +0 to +16",
        normalScrollFail: "Fail = item DESTROYED + crystals returned",
        normalScrollWADesc: "Starts at 80%, drops 5% per level",
        normalScrollJDesc: "Starts at 90%, drops 4% per level",
        blessedScroll: "Blessed Scroll",
        blessedScrollRange: "Range: +0 to +16",
        blessedScrollFail: "Fail = item NOT destroyed, goes back to +0",
        blessedScrollWADesc: "Starts at 90%, drops ~3% per level",
        blessedScrollJDesc: "Starts at 85%, drops ~3% per level",
        crystalScroll: "Crystal Scroll",
        crystalScrollRange: "Range: +16 to +25",
        crystalScrollFail:
          "Fail = NOTHING happens, item stays the same, only scroll is lost",
        crystalScrollWADesc: "Starts at 70%, drops 5% per level",
        crystalScrollJDesc: "Starts at 65%, drops 5% per level",
        crystalScrollNote:
          "Obtained from the NPC shop with Vote Coins + Raid Tokens + Adena.",
        weaponArmor: "Weapons & Armor",
        jewelry: "Jewelry",
        level: "Level",
        chance: "Chance",
        summaryTitle: "Quick Summary",
        summaryNormal: "Normal: cheaper, low rates, item breaks on failure",
        summaryBlessed:
          "Blessed: more expensive, high rates, item goes to +0 on failure",
        summaryCrystal:
          "Crystal: premium, moderate rates, nothing happens on failure (only scroll lost)",
        soulCrystals: "Soul Crystals",
        levelUpChance: "Level up chance",
        breakChance: "Break chance",
        maxLevel: "Max level",
        augmentation: "Augmentation (Life Stones)",
        skillChance: "Skill chance",
        noGrade: "No-Grade",
        midGrade: "Mid-Grade",
        highGrade: "High-Grade",
        topGrade: "Top-Grade",
      },
      vipTab: {
        title: "VIP System",
        howToActivate: "How to activate VIP",
        step1:
          "Obtain a VIP Token (purchase with 20 Titan Coins from NPC shop)",
        step2: "Type .vip in the game chat",
        step3:
          "The token is consumed automatically and VIP status activates for 7 days",
        benefits: "VIP Benefits",
        benefitXpSp: "+40% XP/SP on top of base rate",
        benefitAdena: "+40% Adena on top of base rate",
        benefitDrop: "+40% Drop chance on top of base rate",
        benefitSpoil: "+40% Spoil chance on top of base rate",
        benefitDropAmount:
          "+30% item drop amount (does not apply to Raid/Grand Boss)",
        benefitSpoilAmount:
          "+30% spoil item amount (does not apply to Raid/Grand Boss)",
        benefitBuffs:
          "Free buffs at Buffer NPC (non-VIP pay with Event Medals from level 52)",
        benefitFreya:
          "+13% more Freya Rose drop chance in Daily Instance (32.5% normal vs 45.5% VIP)",
        commands: "VIP Commands",
        howToGet: "How to get the VIP Token",
        howToGetDesc1: "Purchase with 20 Titan Coins from NPC shop",
        howToGetDesc2:
          "Titan Coins are obtained by conquering Fortresses (4 per conquest) and Castles (35 to 135 depending on the castle) as clan leader",
      },
      eventsTab: {
        schedule: "Full Schedule",
        scheduleNote:
          "TvT remains active by schedule. CTF and DM are temporarily paused.",
        eventActive: "ACTIVE",
        eventInactive: "PAUSED",
        ctfPaused: "Automatic CTF temporarily disabled",
        dmPaused: "Automatic DM temporarily disabled",
        hour: "Hour",
        event: "Event",
        joinCommands: "Commands to participate",
        tvt: "TvT (Team vs Team)",
        ctf: "CTF (Capture the Flag)",
        dm: "DM (Death Match)",
        townWar: "Town War",
        format: "Format",
        level: "Level",
        players: "Players",
        duration: "Duration",
        location: "Location",
        npcRegister: "Registration NPC",
        potions: "Potions",
        summons: "Summons",
        revive: "Revive",
        healers: "Healers",
        rewards: "Rewards",
        allowed: "Allowed",
        notAllowed: "Not allowed",
        tvtFormat: "Blue vs Red (random teams)",
        tvtDuration: "5 min registration + 5 min event",
        tvtLocation: "Aden Colosseum",
        appearsGiran: "Appears in Giran",
        tvtRevive: "Full recovery, 5s delay",
        tvtWin: "Winning team: 25 Event Medals",
        tvtLose: "Losing team: 15 Event Medals",
        tvtTop: "Top Killer: +15 Event Medals extra",
        ctfDuration: "5 min registration + 5 min event",
        ctfWin: "Winning team: 25 Event Medals",
        ctfLose: "Losing team: 10 Event Medals",
        dmFormat: "Free-for-all (no teams)",
        dmDuration: "5 min registration + 5 min event",
        dmRevive: "Full recovery, 10s delay",
        dmKill: "1 Event Medal per kill",
        dmTop: "Top Killer: +15 Event Medals",
        townWarCity: "Giran (becomes PvP zone)",
        townWarReward: "1 Event Medal per kill",
        townWarKarma: "No karma during event",
        townWarAdmin: "Activated by administrators",
        generalRules: "General Event Rules",
        rule1: "Cannot participate if in Olympiad or another event",
        rule2: "Dual-box restriction in events",
        rule3: "Events do not run during castle sieges",
      },
      instancesTab: {
        title: "Daily Instances",
        instancesSectionTitle: "Daily instances",
        instancesSectionDesc: "Instanced content with timer and fixed rules.",
        customZoneSectionTitle: "Custom zone",
        customZoneSectionDesc: "Open farming/PvP zone with its own balance.",
        howItWorks: "How it works",
        desc1: "Time-limited farming zones that reset every day",
        desc2: "Time pauses when the player leaves or disconnects",
        desc3: "Daily reset at 06:30 AM (server time)",
        desc4: "Players in the same instance share the zone and can party",
        paganTemple: "Instance: Pagan Temple",
        maxTime: "Max time per day",
        maxTimeVal: "60 minutes",
        maxEntries: "Max entries per day",
        maxEntriesVal: "1",
        levelRange: "Level range",
        levelRangeVal: "1 - 80",
        mobCount: "Mob count",
        mobCountVal: "~228 mobs",
        mobTypes: "Mob types",
        mobTypesVal:
          "Chapel Guard, Triol's Layperson, Triol's Believer, Triol's Priest, Ritual Offering",
        exitLocation: "Exit location",
        exitLocationVal: "Rune Castle Town",
        drops: "Instance Drops",
        adena: "Adena: 130,000 - 170,000 per mob (70% chance)",
        freyaRose: "Freya Rose Red Potion: 32.5% normal / 45.5% VIP",
        titansBoxDrop: "Titan’s Box: 10% normal / 14% VIP",
        commands: "Commands",
        restrictions: "Restrictions",
        restrict1: "Cannot use Scroll of Escape or /unstuck (use .daily exit)",
        restrict2: "On death: you respawn in town",
        restrict3: "On disconnect: time pauses and you respawn in Giran",
        restrict4: "Cannot enter if already inside another instance",
        neutralZoneTitle: "Neutral Zone (rework)",
        neutralZoneIntro: "Active PvP zone with tuned flow, mobs and economy.",
        neutralIdentity: "Zone now has a clearer PvP identity.",
        neutralMonsters: "Population refreshed with custom monsters.",
        neutralFlow: "Combat pressure and farming flow were adjusted.",
        neutralFlag: "PvP-flag behavior is now more reliable.",
        neutralDrops: "Drops and spoils rebalanced for crafting progression.",
        neutralDropSummaryTitle: "Drops (Neutral Zone)",
        neutralDropSummaryDrop:
          "Drop: Adena + crafting materials (Mold Glue/Lubricant/Hardener, Enria, Asofe, Thons, Varnish of Purity, Synthetic Cokes, Compound Braid, Mithril Alloy, Durable Metal Plate, Blacksmith's Frame, High Grade Suede, Oriharukon Ore, Mithril Ore, Adamantite Nugget, Oriharukon).",
        neutralDropSummarySpoil:
          "Spoil: Sealed A-S gear/jewelry (Draconic Leather, Imperial Crusader, Major Arcana).",
        neutralDropSummaryMobs:
          "Quick reference to locate the zone and plan your farming route.",
        dailyRewardsTitle: "Updated daily rewards",
        rewardAdena: "Adena",
        rewardFreyaRose: "Freya Rose Red Potion",
        rewardTitansBox: "Titan’s Box",
        titansBoxExtractable:
          "Titan’s Box has been added to the server extractable system.",
      },
      siegesTab: {
        fortresses: "Fortresses",
        fortressInfo: "General Information",
        fortressCount: "21 fortresses distributed across the map",
        fortressDuration: "Siege duration: 60 minutes",
        fortressClanLevel: "Minimum clan level: 4",
        fortressCost: "Registration cost: 250,000 Adena",
        howItWorks: "How the siege works",
        siege1: "The attacking clan registers by paying 250,000 Adena",
        siege2: "Sieges are announced at 24h, 1h, 10min and 5min before start",
        siege3: "On start: doors open, guards and 4 commanders spawn",
        siege4: "Attackers must kill the 4 fortress commanders",
        siege5: "When all commanders die, a Combat Flag appears",
        siege6: "An attacker must capture (Engrave) the flag to win",
        conquestRewards: "Conquest Rewards",
        reward1: "2 Titan Coins for the conquering clan leader",
        reward2: "+500 clan reputation points for the new owner",
        reward3: "+250 reputation points if the clan successfully defends",
        ownerBenefits: "Owner Benefits",
        benefit1:
          "Wyvern Manager: leader can ride Wyvern (10 Crystal B-Grade, Strider 55+)",
        benefit2: "Buffer NPC inside the fortress",
        benefit3: "Fortress door control",
        fortressList: "Fortress List (21)",
        castleSieges: "Castle Sieges",
        castleDuration: "Duration",
        castleDurationVal: "120 minutes",
        castleFlags: "Max flags",
        castleFlagsVal: "2",
        castleClanLevel: "Minimum clan level",
        castleClanLevelVal: "5",
        castleAttackerRespawn: "Attacker respawn",
        castleAttackerRespawnVal: "10 seconds",
        castleDefenderRespawn: "Defender respawn",
        castleDefenderRespawnVal: "30 seconds",
        castleTeleport: "Siege teleport",
        castleTeleportVal: "Allowed",
        castleConquestRewards: "Conquest Rewards",
        castleReward1:
          "35 to 135 Titan Coins for the conquering clan leader depending on the castle",
        castleList: "Castles",
      },
      economyTab: {
        introKicker: "Economy map",
        introTitle: "Currencies, loops and shops, cleanly separated",
        introDesc:
          "Start with the currency, move on to its shop or linked reward, and finish with the loops that connect PvP, bosses, voting and progression.",
        lettersIntro:
          'The new daily <code class="bg-black/40 text-yellow-400 px-2 py-0.5 rounded text-xs">.daily enter 2</code> grants Adena and L2 Day letters. Those letters are exchanged at <strong>Paul Merchant</strong> for A-grade multisells.',
        lettersCombos:
          'Collect letters to spell words and redeem them directly at Paul Merchant. The active combinations are <strong>WEAPON</strong>, <strong>SHIELD</strong>, <strong>YEWELLS</strong> and <strong>ARMORS</strong>. Some top recipes also require the special item <strong>II</strong>.',
        lettersRequired: "Required letters",
        lettersExchange: "Exchange:",
        lettersFootnote:
          'The top recipe uses the special item <strong>II</strong>. There is no letter J in the client.',
        currencies: "Server Currencies",
        pvpCoin: "PVP Coin",
        pvpCoinSource: "1 per PvP kill",
        eventMedal: "Event Medal",
        eventMedalSource: "From configured PvP events and Town War",
        raidToken: "Raid Token",
        raidTokenSource: "Dropped by all Raid Bosses and Grand Bosses",
        voteCoin: "Vote Coin",
        voteCoinSource:
          "Voting on HopZone / TopZone / L2Network / L2JBrasil / Top100Arena",
        titanCoin: "Titan Coin",
        titanCoinSource:
          "4 per Fortress and 35-135 per Castle depending on the castle (clan leader)",
        vipToken: "VIP Token",
        vipTokenSource: "Purchase with 20 Titan Coins",
        crystalScrollShop: "Crystal Scroll Shop",
        crystalScrollNote:
          "On fail it does not downgrade or destroy the item; only the scroll is consumed. Requires Vote Coins + Raid Tokens + Adena.",
        weaponScrolls: "Weapon Crystal Scrolls",
        armorScrolls: "Armor Crystal Scrolls",
        grade: "Grade",
        specialShop: "Special Shop",
        withTitanCoins: "With Titan Coins",
        withEventMedals: "With Event Medals",
        withVoteCoins: "With Vote Coins",
        soulCrystal11: "Soul Crystal Lv. 11",
        soulCrystal12: "Soul Crystal Lv. 12",
        soulCrystal13: "Soul Crystal Lv. 13",
        redPipetteKnife: "Red Pipette Knife",
        proofOfBlood: "Proof of Blood",
        proofOfAlliance: "Proof of Alliance",
        proofOfAspiration: "Proof of Aspiration",
        lifeStone52: "Life Stone Top-Grade Lv. 52",
        lifeStone61: "Life Stone Top-Grade Lv. 61",
        lifeStone67: "Life Stone Top-Grade Lv. 67",
        lifeStone76: "Life Stone Top-Grade Lv. 76",
        freyaRosePotion: "Freya Rose Red Potion",
        titansBoxTitle: "Titan’s Box Rewards",
        titansBoxDesc: "Official reward chances per Titan’s Box opening.",
        titansBoxItemId: "Item",
        titansBoxItemName: "Reward",
        titansBoxQty: "Qty",
        titansBoxChance: "%",
        titansBoxTotal: "Total: 100%",
        shirtsTitle: "Shirt System",
        shirtsDesc:
          "Equippable items that give progressive P.Atk, M.Atk and PvP Damage bonuses. To upgrade you must trade in the previous shirt.",
        shirtLevel: "Level",
        shirtStats: "Stats",
        shirtPrice: "Price",
        raidTokens: "Raid Tokens per Boss",
        raidTokensDesc: "All Raid Bosses and Grand Bosses drop Raid Tokens.",
        raidBoss: "Boss",
        raidTotalFinal: "Final total",
        raidDistribution: "Final distribution",
        normalRB: "Normal Raid Bosses",
        queenAnt: "Queen Ant",
        orfen: "Orfen",
        zaken: "Zaken",
        baium: "Baium",
        antharas: "Antharas",
        valakas: "Valakas",
        flowTitle: "Economy Flow",
        flow1: "PvP Kills → PVP Coins → Shirts",
        flow2: "Events → Event Medals → Soul Crystals / Life Stones / Buffs",
        flow3: "Raid Bosses → Raid Tokens → Crystal Scrolls",
        flow4: "Voting → Vote Coins → Crystal Scrolls",
        flow5: "Fortresses/Castles → Titan Coins → VIP Token → VIP 7 days",
        source: "Source",
        use: "Use",
      },
      featuresTab: {
        introKicker: "Server features",
        introTitle: "SubStack, AutoFarm, PvP and in-game utilities",
        introDesc:
          "This tab summarizes custom NPCs, SubStack Manager, AutoFarm, raid announcements, Community Board, Olympiad and other published systems. If you searched for a Lineage 2 private server with SubStack, we also have a dedicated landing with FAQs and quick links.",
        substackPageLink: "SubStack page — how it works and useful links",
        customNpcs: "Custom NPCs",
        autoFarm: "Advanced AutoFarm",
        autoFarmDesc1: "Available modes: Auto / Fighter / Mage",
        autoFarmDesc2:
          "Assist, Assist Leader Strict and Summon Assist for party play",
        autoFarmDesc3: "Filters: only attacked targets and respectful hunting",
        autoFarmDesc4:
          "Radius control and skill category cooldowns (attack/debuff/buff)",
        bufferNpc: "Buffer NPC",
        bufferDesc1:
          "Categories: Prophet, Chants, Prophecies, Summons, Resistances, Pa'agrio, Dances, Songs",
        bufferDesc2: "Free for level 52 or below and for VIP players",
        bufferDesc3: "Others pay with Event Medals (1 per buff)",
        bufferDesc4: "5 saveable buff schemes per character",
        bufferDesc5: "Quick presets: Fighter and Mage",
        bufferDesc6: "CP/HP/MP restoration and option to cancel all buffs",
        substackManager: "Substack Manager",
        substackDesc1:
          "SubStack = base +1: you add a subclass on your current class without your base ceasing to be your main class.",
        substackDesc2: "Minimum level: 76",
        substackDesc3: "Quest managed by SubStack Manager in Giran",
        substackDesc4:
          "No-morph: your body does not change and your base is not “converted” into another class—you only gain subclass skills.",
        substackDesc5:
          "Illustrative example: setups like adventurer + Sword Muse for extra utility—the point is stacking skills, not mutating the base class.",
        noblesseTrader: "Flexible Noblesse",
        noblesseDesc1:
          "Available through full quest route or Barakiel kill based on server config.",
        noblesseDesc2:
          "Classic route remains and an alternative progression path is available.",
        clanManager: "Clan Manager",
        clanDesc1: "Grants Clan Level 8 and 3,000,000 reputation for Gold Bars",
        clanDesc2: "Requirement: Noble leader",
        raidbossInfo: "Raidboss Announcement",
        raidbossDesc1: "Announces Raid Boss spawns on the server",
        raidbossDesc2: "Shows boss information and location",
        pvpSystem: "PvP System",
        pvpRewards: "PvP Rewards",
        pvpReward1: "1 PVP Coin per PvP kill",
        pvpReward2:
          "Active anti-farm system: checks party, IP, clan and alliance",
        pkPenalties: "PK Penalties (players with Karma)",
        pkDesc1: "Items are not dropped on death in normal PvP",
        pkDesc2: "Only PKs (with Karma) drop items:",
        pkDropLimit: "Limit: 10 items",
        pkDropChanceGeneral: "General drop chance: 40%",
        pkDropChanceNormal: "Normal item chance: 50%",
        pkDropChanceEquip: "Equipment chance: 40%",
        pkDropChanceWeapon: "Weapon chance: 10%",
        pkDropMinKills: "Minimum PKs to start dropping: 5",
        olympiad: "Olympiad",
        olympiadStartTime: "Start time",
        olympiadStartTimeValue: "18:00 (server time)",
        olyDuration: "Battle duration",
        olyDurationVal: "6 minutes",
        olyPeriod: "Period",
        olyPeriodVal: "Every 2 weeks",
        olyClassed: "Classed participants",
        olyClassedVal: "Minimum 5",
        olyNonClassed: "Non-Classed participants",
        olyNonClassedVal: "Minimum 9",
        olyReward: "Victory reward",
        olyRewardVal: "Gate Pass — 50 Classed, 30 Non-Classed",
        olyMaxEnchant: "Max enchant",
        olyMaxEnchantVal: "+25",
        olyAugment: "Augmentation",
        olyAugmentVal: "Allowed",
        olyRestricted: "Restricted items",
        olyRestrictedVal: "Heal potions and escape scrolls",
        olyCountdown: "Teleport countdown",
        olyCountdownVal: "60 seconds",
        olySkills: "Skills recharged",
        olySkillsVal: "Yes (before and after combat)",
        classBalanceTitle: "PvP Balance v1.1.1",
        tankVsFighter: "Tanks vs Fighters: +30% damage",
        tankVsMage: "Tanks vs Mages: +25% damage",
        heavyVsMage:
          "Duelist/Dreadnought/Titan/GK/FS/Maestro vs Mages: up to +20%",
        daggerArcherVsMage: "Daggers/Archers/BD-SWS line vs Mages: +15%",
        magicCritCap: "M.Crit Rate cap: 350",
        magicCritPower: "Magic Critical Power: 2.8x",
        magicFailures: "MagicFailures disabled for more reliable casting",
        totemRework:
          "Totem rework: full bonus with Fist/Dual Fist, reduced bonus with other weapons",
        classMaster3rd:
          "Class Master now supports 3rd class with configured cost/reward",
        globalGkUpdate:
          "Global GK is active with updated menu and new utility/farm zones",
        heroCustom: "Custom Hero",
        heroDesc1:
          "A consumable item exists that grants temporary Hero status for days (configurable)",
        heroDesc2: "Heroes can choose 1 Hero weapon at the Hero Monuments",
        heroDesc3: "Heroes automatically receive the Wings of Destiny Circlet",
        otherFeatures: "Other Features",
        expToggle:
          "EXP control: use .exp to enable or pause EXP gain based on your objective",
        topRanking: "In-game ranking: .top shows paginated PvP/PK standings",
        dropCommand:
          "Drop view: with target + Ctrl+Shift you can inspect drop/spoil instantly",
        balanceUpdates:
          "Frequent balance and siege updates to keep the meta active",
        autoLearn:
          "Auto Learn Skills: Skills are learned automatically on level up",
        subclassNoQuest:
          "Subclass without Quests: You can change subclass without doing original quests (except 3rd class)",
        offlineShop:
          "Offline Shop: When you set up a shop and log out, the shop stays open",
        antiFarm:
          "Anti-Farm PvP: Party, IP, Clan and Alliance verification to prevent farming",
        weight: "Weight x3: Inventory weight limit is 3 times the original",
        shiftClick:
          "Shift+Click on Mobs: Players can view stats and droplist of mobs",
      },
      commandsTab: {
        title: "All Commands",
        catVip: "VIP",
        catInstances: "Daily Instances",
        catEvents: "Events",
        catRankings: "Rankings",
        catVote: "Voting",
        catTeleport: "Teleport",
        catBank: "Bank",
        catMarriage: "Marriage",
        catUtilities: "Utilities",
        cmdVipActivate: "Activate VIP (consumes 1 VIP Token from inventory)",
        cmdVipInfo: "View remaining VIP time",
        cmdDaily: "Daily instances main menu",
        cmdDailyWatch: "View detailed instance information",
        cmdDailyEnter: "Enter an instance",
        cmdDailyExit: "Exit current instance (not available in combat)",
        cmdJoin: "Join active event (TvT, CTF or DM)",
        cmdLeave: "Leave the event",
        cmdTop: "Rankings menu",
        cmdTopPvp: "Top players by PvP kills (paginated)",
        cmdTopPk: "Top players by PK kills (paginated)",
        cmdVote: "Vote on top sites (HopZone, TopZone, L2Network)",
        cmdVotePoints: "View accumulated vote points",
        cmdGetVoteReward: "Redeem vote points for rewards",
        cmdVoteTime: "View when you can vote again",
        cmdGlobalGk: "Open Global GK with teleports and custom zones",
        cmdFarm1: "Teleport to farming zone 1",
        cmdFarm2: "Teleport to farming zone 2",
        cmdPvp1: "Teleport to PvP zone 1",
        cmdPvp2: "Teleport to PvP zone 2",
        cmdBank: "View Adena / Gold Bars conversion info",
        cmdDeposit: "Convert Adena to Gold Bars",
        cmdWithdraw: "Convert Gold Bars to Adena",
        cmdEngage: "Propose marriage (target must be in friend list)",
        cmdDivorce: "Divorce",
        cmdGotolove: "Teleport to your spouse (adena cost + cast time)",
        cmdOnline: "View number of connected players",
        cmdAway: "Enable AFK status (with optional message)",
        cmdBack: "Disable AFK status",
        cmdOfflineShop: "Convert private shop to offline shop",
        cmdExp: "Enable or disable EXP gain",
        cmdAutoFarm: "Open or use the server AutoFarm system",
        cmdDrop: "View target drop and spoil with target + Ctrl+Shift",
        cmdRepair: "Repair bugged character (moves to Floran Village)",
        cmdStat: "View selected player stats",
        cmdStats: "View selected player event kills",
      },
      overview: {
        title: "L2Titan Interlude x25 - Patch 1.3 live",
        intro1:
          "A server for players who value a solid and enjoyable Lineage 2 experience.",
        intro2:
          "Active community, practical systems and a competitive environment built for team play.",
        sectionTitle: "What matters most when you play",
        substackTitle: "SubStack",
        substackDesc:
          "Base +1: a subclass on top of your base without replacing it (e.g. adventurer + Sword Muse). Base does not mutate—you add skills. Server uses no-morph.",
        autofarmTitle: "Advanced AutoFarm",
        autofarmDesc:
          "Set modes, assist, filters and radius so your character behaves the way you want.",
        expControlTitle: ".exp",
        expControlDesc:
          "Enable or pause EXP gain to control your range, goals and progression pace.",
        eventsTitle: "Events with .join/.leave",
        eventsDesc:
          "TvT, CTF and DM use unified join/leave commands for faster participation.",
        dailyTitle: "Daily Instances",
        dailyDesc:
          "With .daily you see info, remaining time and manage enter/exit quickly.",
        rankingTitle: "Ranking .top",
        rankingDesc:
          "Check paginated PvP/PK ranking in-game and track competitive progress.",
        dropViewTitle: "Drop view",
        dropViewDesc:
          "With target + Ctrl+Shift inspect drop/spoil instantly to choose better farming spots.",
        vipTitle: "VIP",
        vipDesc:
          "Manage VIP status and remaining time with .vip/.vipinfo and clear benefits.",
        bufferTitle: "Buffer Manager",
        bufferDesc:
          "Fighter/Mage presets, HP/CP/MP restore, cancel and schemes for fast prep.",
        balanceTitle: "Balance and sieges",
        balanceDesc: "Frequent updates to keep fights and sieges moving.",
        whyTitle: "Why play here",
        whyClarity:
          "Clear tools that save time without removing gameplay depth.",
        whyCommands:
          "Useful commands for progression, events and competition in one place.",
        whyUpdates: "Active project with frequent balance and siege updates.",
        ctaTitle: "Ready to join?",
        ctaDesc:
          "Join Discord for updates and support. Download the client and start now.",
      },
      discord: {
        title: "Join our Community",
        description:
          "Connect with other players, get support and stay up to date with the latest news",
        joinButton: "Join Discord",
      },
    },
    news: {
      title: "Latest News",
      viewAll: "View all news",
      readMore: "Read more →",
      backButton: "Back",
      indexMetaTitle: "L2Titan news — patches, events and balance",
      indexMetaDescription:
        "L2Titan Lineage 2 Interlude x25 server news: patches, boss events, sieges, balance changes and season announcements.",
      indexSectionHeading: "L2Titan news",
      indexHeroTitle: "Server news, patches and events",
      indexHeroIntro:
        "This is where we publish meta-changing updates (balance, economy, instances) and event notices. For stable server systems, also use the guides linked below.",
      cardReadPrefix: "Read:",
      relatedNavAria: "Guides related to the news",
      relatedTitle: "Guides that complement the news",
      relatedIntro:
        "When a patch touches economy, PvP or instances, there is usually a static page with full context.",
      relatedFeatures: "Features & systems",
      relatedEconomy: "Economy",
      relatedEvents: "PvP events",
      relatedWikiInfo: "Wiki /info",
      relatedDownloads: "Download client",
      articleBackToNews: "Back to news",
      articleContinueReading: "Keep reading",
      articleLinkDownloads: "Download Lineage 2 Interlude client",
      articleLinkFeatures: "Features: SubStack, AutoFarm and tools",
      articleLinkFaq: "FAQ for new players",
      articleLinkWiki: "Wiki / information hub",
      articleCtaDownload: "Download client",
      items: {
        infinitumTower: {
          title: "Infinitum Tower and L2 Day letters now shown on the website",
          summary:
            "The website now shows the new letters daily, its real access with .daily enter 2, and the Paul Merchant exchanges.",
          content:
            "Public information was aligned with the real server configuration: Infinitum Tower is now listed as an active daily, L2 Day letters are explained, and Paul Merchant exchanges for A-grade weapons, sets, shields, and jewels are clarified.",
        },
        patchV1: {
          title: "Patch v1 - Combat, offline shop and stability",
          summary:
            "Core combat fixes, persistent offline shop, Olympiad/pet adjustments, and anti-crash/anti-bot improvements were applied.",
          content:
            "Patch v1 fixes key combat interactions (heal, lethal, CP, MP reflect, siege revive and cancel), enables DB-persistent offline shop, and adds important server stability, anti-DoS and baseline geodata improvements.",
        },
        patchV1Qol: {
          title: "Patch v1 QoL - Drop, vote, Buffer and Substack UI",
          summary:
            "Improvements to .drop, voting flow, RateDropQuest x1.20, Global GK and movement/geodata stability.",
          content:
            "Progression flow was improved with clearer .drop view, fairer vote validation per platform, better Buffer/Substack UI, temporary CTF/DM pause (TvT active), and stability fixes for invalid movement paths.",
        },
        patch13: {
          title: "Patch 1.3 - Neutral Zone and Titan Box",
          summary:
            "Global GK improvements, Neutral Zone rework, updated daily rewards, and flexible Noblesse progression.",
          content:
            "Gameplay update is live: Global GK now has streamlined navigation, a utilities menu, farm zones (Neutral Zone/Beast Farm), and a level-range Raid Boss browser (non-epic). Neutral Zone was reworked for active PvP with custom monsters and rebalanced drop/spoil economy. Daily instance mobs now reward Adena, Freya Rose, and Titan’s Box (integrated into extractables). Noblesse now supports full quest-chain mode or alternative Barakiel-based progression depending on server configuration.",
        },
        patch111: {
          title: "Patch 1.3.1 - PvP balance and magic",
          summary:
            "Targeted class-vs-class tuning, totem updates, magic crit cap changes and more reliable casting.",
          content:
            "Tanks and melee lines received targeted matchup tuning. Grand Khavatari totems are no longer hard-locked to fist with scaled bonuses on other weapons. M.Crit was adjusted (cap 350, power 2.8x) and magic failures were disabled for consistency.",
        },
        patchQol: {
          title: "QoL Patch - Economy, vote and systems",
          summary:
            "Drop Viewer, voting logic, Buffer/Substack UI and economy were updated for better progression clarity.",
          content:
            "The season now includes major QoL upgrades: improved .drop view, fairer vote validation, Event/Vote/Titan shop rebalance, Class Master support for 3rd class, and extra movement/geodata stability fixes.",
        },
        castleConquest: {
          title: "Castle conquest - last Saturday",
          summary:
            "Summary of last Saturday castle conquest and its impact on server economy.",
          content:
            "Last Saturday castle conquest has been registered with Titan Coin rewards for the winning clan leader. This directly affects VIP progression loop and the strategic control of the current season.",
        },
        baiumEvent: {
          title: "Upcoming event: Baium",
          summary:
            "Special Baium event is coming. We will publish exact time, rules and rewards in the next announcement.",
          content:
            "Baium event is currently being prepared. Once you share the final official image and schedule, we will update this post with final art, registration window and full rules.",
        },
      },
    },
    common: {
      loading: "Loading...",
    },
    status: {
      game: "Game",
      login: "Login",
      online: "Online",
      offline: "Offline",
    },
    a11y: {
      skipToContent: "Skip to content",
    },
    error: {
      notFoundTitle: "Page not found",
      notFoundDescription:
        "The page you are looking for does not exist or has been moved.",
      backHome: "Back to home",
    },
  },
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeDeep<T extends Record<string, unknown>>(
  target: T,
  source: Record<string, unknown>,
): T {
  const output = { ...target } as Record<string, unknown>;

  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = output[key];

    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      output[key] = mergeDeep(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  }

  return output as T;
}

export const translations = mergeDeep(
  baseTranslations,
  infoWikiTranslationOverrides,
);

export type Language = "es" | "en";
export type TranslationKey = keyof typeof translations.es;
