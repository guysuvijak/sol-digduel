if (!self.define) {
    let e,
        a = {};
    const f = (f, i) => (
        (f = new URL(f + '.js', i).href),
        a[f] ||
            new Promise((a) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = f), (e.onload = a), document.head.appendChild(e);
                } else (e = f), importScripts(f), a();
            }).then(() => {
                let e = a[f];
                if (!e)
                    throw new Error(`Module ${f} didn’t register its module`);
                return e;
            })
    );
    self.define = (i, c) => {
        const d =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href;
        if (a[d]) return;
        let s = {};
        const t = (e) => f(e, d),
            b = { module: { uri: d }, exports: s, require: t };
        a[d] = Promise.all(i.map((e) => b[e] || t(e))).then(
            (e) => (c(...e), s)
        );
    };
}
define(['./workbox-1bb06f5e'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: '/_next/app-build-manifest.json',
                    revision: '9f436330162e60e150d4c2eb388bcd07'
                },
                {
                    url: '/_next/static/BwwKzJ2dnz14OglBTiIrr/_buildManifest.js',
                    revision: '6164bf3f41c7a85bb156b478330fc910'
                },
                {
                    url: '/_next/static/BwwKzJ2dnz14OglBTiIrr/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933'
                },
                {
                    url: '/_next/static/chunks/203.215f7ebb412294c3.js',
                    revision: '215f7ebb412294c3'
                },
                {
                    url: '/_next/static/chunks/210.32397a625b0892a5.js',
                    revision: '32397a625b0892a5'
                },
                {
                    url: '/_next/static/chunks/218.ad83b00c503fe8f6.js',
                    revision: 'ad83b00c503fe8f6'
                },
                {
                    url: '/_next/static/chunks/372.f7d51ce3d74936a9.js',
                    revision: 'f7d51ce3d74936a9'
                },
                {
                    url: '/_next/static/chunks/389.71bffba46d586f64.js',
                    revision: '71bffba46d586f64'
                },
                {
                    url: '/_next/static/chunks/3a91511d.4697265320309674.js',
                    revision: '4697265320309674'
                },
                {
                    url: '/_next/static/chunks/404.c766b6cd86e09f81.js',
                    revision: 'c766b6cd86e09f81'
                },
                {
                    url: '/_next/static/chunks/42.424171b9a6a55060.js',
                    revision: '424171b9a6a55060'
                },
                {
                    url: '/_next/static/chunks/493.cdbaf53a73ed85f8.js',
                    revision: 'cdbaf53a73ed85f8'
                },
                {
                    url: '/_next/static/chunks/4bd1b696-a98f3ed9a72e4034.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/517-0db8042eb275cb4f.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/552.52b09d5f6d4d5a92.js',
                    revision: '52b09d5f6d4d5a92'
                },
                {
                    url: '/_next/static/chunks/612.a3770d7fed16de9e.js',
                    revision: 'a3770d7fed16de9e'
                },
                {
                    url: '/_next/static/chunks/613.831e9f66fd541529.js',
                    revision: '831e9f66fd541529'
                },
                {
                    url: '/_next/static/chunks/634.6f83c580e4f9653c.js',
                    revision: '6f83c580e4f9653c'
                },
                {
                    url: '/_next/static/chunks/635-e3418e24a9347d92.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/65.00492fb4c00f2e37.js',
                    revision: '00492fb4c00f2e37'
                },
                {
                    url: '/_next/static/chunks/669.3a79d005d6f4ac0c.js',
                    revision: '3a79d005d6f4ac0c'
                },
                {
                    url: '/_next/static/chunks/707.35e2ee1270a9afb9.js',
                    revision: '35e2ee1270a9afb9'
                },
                {
                    url: '/_next/static/chunks/83.994344e386b96131.js',
                    revision: '994344e386b96131'
                },
                {
                    url: '/_next/static/chunks/863-7bff6ee18ed9f1ed.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/865.6777a3d9318197b8.js',
                    revision: '6777a3d9318197b8'
                },
                {
                    url: '/_next/static/chunks/aaea2bcf.1029aeb85b97d3e8.js',
                    revision: '1029aeb85b97d3e8'
                },
                {
                    url: '/_next/static/chunks/ad2866b8.f1442ee25fd052ff.js',
                    revision: 'f1442ee25fd052ff'
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-3e13321bdc604d13.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/app/layout-7d4c63ca55b7a0c8.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/app/not-found-fb5f718d40399205.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/app/page-695ed371f1ed1f0c.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/framework-c58fa61e54b36e4f.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/main-17d1b1ae019d1442.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/main-app-f7b938463d82dcde.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/pages/_app-a758f815eb597e9a.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/pages/_error-d6581ca4c5de7e3b.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f'
                },
                {
                    url: '/_next/static/chunks/webpack-3c2fd2499e7fc2c3.js',
                    revision: 'BwwKzJ2dnz14OglBTiIrr'
                },
                {
                    url: '/_next/static/css/34a72a2dfc6ca7d9.css',
                    revision: '34a72a2dfc6ca7d9'
                },
                {
                    url: '/_next/static/css/3aabee16cfcce06f.css',
                    revision: '3aabee16cfcce06f'
                },
                {
                    url: '/_next/static/css/9f4c18adbad60cee.css',
                    revision: '9f4c18adbad60cee'
                },
                {
                    url: '/_next/static/css/d211fb4a22f556aa.css',
                    revision: 'd211fb4a22f556aa'
                },
                {
                    url: '/_next/static/css/db11787536784eac.css',
                    revision: 'db11787536784eac'
                },
                {
                    url: '/_next/static/css/feebe911480e3483.css',
                    revision: 'feebe911480e3483'
                },
                {
                    url: '/_next/static/media/004f4099441b36b9-s.woff2',
                    revision: '2e6e9887a77c9bc7c0edda9c11c8f705'
                },
                {
                    url: '/_next/static/media/00c209c181938572-s.woff2',
                    revision: 'fe60184377d17de5c6f7ce9d81d57e4f'
                },
                {
                    url: '/_next/static/media/00fb5cda79d81b7c-s.woff2',
                    revision: 'fbeb4dc5804d1c5f963f49a00807840a'
                },
                {
                    url: '/_next/static/media/01dff4c4ac63a0d3-s.woff2',
                    revision: '4253823e253080c6e5e3387173dd2cb0'
                },
                {
                    url: '/_next/static/media/02ae8675603bbc24-s.woff2',
                    revision: '6f60bfe0be74e3ad7d70c7868da98cfe'
                },
                {
                    url: '/_next/static/media/04daeef78f46eb85-s.woff2',
                    revision: 'c11694aa9f35392af7513c295a163bc7'
                },
                {
                    url: '/_next/static/media/0604c96ad92a310a-s.woff2',
                    revision: '0602cc12032bd2b300434129fa101870'
                },
                {
                    url: '/_next/static/media/0639b0dfb9b4f4ba-s.woff2',
                    revision: '9600028749cb1538d1cf50468e5fc016'
                },
                {
                    url: '/_next/static/media/0679c86f0065300f-s.woff2',
                    revision: '9ddf0a0eea941ba0d84c6ab3515185ad'
                },
                {
                    url: '/_next/static/media/06eda078e4b64efd-s.woff2',
                    revision: '2c8a2f6881b8a1071fabae3c6dfeee6a'
                },
                {
                    url: '/_next/static/media/07889df3c60cc4ab-s.woff2',
                    revision: '3ea3606b5275f36ec2ffbee046db57a9'
                },
                {
                    url: '/_next/static/media/079674be2211a851-s.woff2',
                    revision: '33cd033fb18ef6673904db37533cef28'
                },
                {
                    url: '/_next/static/media/07fbd97b4d67da99-s.woff2',
                    revision: 'e17e6ecd8dbf872bd11f6f950406ebd7'
                },
                {
                    url: '/_next/static/media/082b1934e8e23eca-s.woff2',
                    revision: 'fb39e93655b659aaca7d5ab840b01292'
                },
                {
                    url: '/_next/static/media/0b70d69f72f0cf78-s.woff2',
                    revision: '74a9373269271e4f24b25ae51d5d454c'
                },
                {
                    url: '/_next/static/media/0deff3f0700f03cc-s.woff2',
                    revision: '7909d1a0ab9b6bb9b65faec71a76d34a'
                },
                {
                    url: '/_next/static/media/0e072041ce79ee9d-s.woff2',
                    revision: 'dc113ce67b97c067f89afbb3c1425829'
                },
                {
                    url: '/_next/static/media/0e546879f9fadcf3-s.woff2',
                    revision: '95fa397f9c3245f4e6d44e666d406692'
                },
                {
                    url: '/_next/static/media/0f36e50cfe173fbd-s.woff2',
                    revision: '0078793339163305ec6960b9a364608b'
                },
                {
                    url: '/_next/static/media/0f8f66669affdda6-s.woff2',
                    revision: '1f60642875724350ea034ce4997065c9'
                },
                {
                    url: '/_next/static/media/0fef1a063a793ebf-s.woff2',
                    revision: 'e2a2a918b52628e6a9056b27e2d218bf'
                },
                {
                    url: '/_next/static/media/1091eb5790ef1a01-s.woff2',
                    revision: 'f5bc3fafc1c5a6dab0eaf4c4b42b818d'
                },
                {
                    url: '/_next/static/media/10b25f7840b4bc42-s.woff2',
                    revision: 'aecd7233bcabe32826590ec94d061483'
                },
                {
                    url: '/_next/static/media/13499583bfbc5464-s.woff2',
                    revision: '37f650afb858cfd5ef52e20c68f6588d'
                },
                {
                    url: '/_next/static/media/139cadd6007659f1-s.woff2',
                    revision: 'f2e37144a93ef6884a896d0414eed478'
                },
                {
                    url: '/_next/static/media/13b547f74fe76fa6-s.woff2',
                    revision: 'bae212da625deda207574eae364ef7f7'
                },
                {
                    url: '/_next/static/media/13c66c395720a492-s.woff2',
                    revision: '1d61b172795cf67973ad5376f973fee6'
                },
                {
                    url: '/_next/static/media/14bf87d9c02dbec5-s.woff2',
                    revision: '1942062aecbe229c93aa6eee7a16a131'
                },
                {
                    url: '/_next/static/media/14c8faeaedb3b528-s.p.woff2',
                    revision: 'b6b21c22445560354d612a188a65bb0d'
                },
                {
                    url: '/_next/static/media/1589adf678307552-s.woff2',
                    revision: 'ad78bee7c72f09cd006c729936e5c654'
                },
                {
                    url: '/_next/static/media/16ce24457705c532-s.woff2',
                    revision: '6ce7ae2c452bcfabfcea285fd81cada7'
                },
                {
                    url: '/_next/static/media/16f0fd2b7d4a79d6-s.woff2',
                    revision: '728d35200e17568a34ada5c15e0bef17'
                },
                {
                    url: '/_next/static/media/171ed914f8915f61-s.woff2',
                    revision: 'fc921cd139b0f7438e31ac03e7220d11'
                },
                {
                    url: '/_next/static/media/175742aa1f3159f8-s.woff2',
                    revision: 'ccc819a334027d5f6a73ad74827f754e'
                },
                {
                    url: '/_next/static/media/1814dee0042d7695-s.woff2',
                    revision: '00991967b44af7a4b62617773194f622'
                },
                {
                    url: '/_next/static/media/18ad1b43b7531c84-s.woff2',
                    revision: '92337d24de0843e13bc65e60eb5af98a'
                },
                {
                    url: '/_next/static/media/19060bbcca4ecb84-s.woff2',
                    revision: '7c8955d56f6563bb8c11be0fcc2897d3'
                },
                {
                    url: '/_next/static/media/190cde0e85380b12-s.woff2',
                    revision: 'dbe7f40a7f9a49f07636c09dab98f0d8'
                },
                {
                    url: '/_next/static/media/192dda636ff5febe-s.woff2',
                    revision: '54af29f0d42f26daf30b97063fbf3412'
                },
                {
                    url: '/_next/static/media/1af90c063d4c21f1-s.woff2',
                    revision: '36882b48dc0f6f99b291cd17d1e915eb'
                },
                {
                    url: '/_next/static/media/1b946bf4a6b2ff6c-s.woff2',
                    revision: '7e45e639ff882ce6aec8e771b88c1496'
                },
                {
                    url: '/_next/static/media/1c19194c0743392a-s.woff2',
                    revision: 'effaa7bdc67c9772ef55f0ee4d0b29af'
                },
                {
                    url: '/_next/static/media/1cb24b342df1f25b-s.woff2',
                    revision: '86d5bfbc43dc1728222490a0812459e0'
                },
                {
                    url: '/_next/static/media/1d3acdd9467331a8-s.woff2',
                    revision: '37edcb9d1837a83feac0ca2d7bac7fb0'
                },
                {
                    url: '/_next/static/media/1eb6bb2da9b8ad87-s.woff2',
                    revision: '94b18660225df84544d24ba38f46633d'
                },
                {
                    url: '/_next/static/media/1eeab4221f640e0b-s.woff2',
                    revision: 'a078e4c390293f657bca785e5fa52121'
                },
                {
                    url: '/_next/static/media/1f7bbbf73f7bd82b-s.woff2',
                    revision: '4fb86f883f4f80bcd3051598b30cf4e6'
                },
                {
                    url: '/_next/static/media/1fb58fba2ed52687-s.woff2',
                    revision: 'b673d9c4d442684c71a52ace6143d48c'
                },
                {
                    url: '/_next/static/media/1fd2c02d509ee8a9-s.woff2',
                    revision: '68fe0fc4a012ad95ca5f775907125a35'
                },
                {
                    url: '/_next/static/media/1fd428ecfa2def7c-s.woff2',
                    revision: '848fb8f87d26b948d682f03c6beec3db'
                },
                {
                    url: '/_next/static/media/2105cad50c3e7584-s.woff2',
                    revision: 'f4fab1bac0322f8d3d5aa94a97872332'
                },
                {
                    url: '/_next/static/media/231f77fab9cf003b-s.woff2',
                    revision: '89b7de729e0e5772c25f70ae7826346f'
                },
                {
                    url: '/_next/static/media/2342b516d90d0777-s.woff2',
                    revision: '5766717bd192aba8fa4acae6d7ff5171'
                },
                {
                    url: '/_next/static/media/23819467d97353aa-s.woff2',
                    revision: 'ed25efe8499ccd2d8ae4c73655877ea3'
                },
                {
                    url: '/_next/static/media/2446fecc381e449b-s.woff2',
                    revision: 'c9da74c5c9dc8730fc235e1b31d7e153'
                },
                {
                    url: '/_next/static/media/2561f1cefe0c60e1-s.woff2',
                    revision: '682c723f93ceb43b3e0644994f481f27'
                },
                {
                    url: '/_next/static/media/264ad191907e74e4-s.woff2',
                    revision: 'cfce063afc3cbb2d969e6d399bc68a5e'
                },
                {
                    url: '/_next/static/media/268b7ed46fafc55d-s.woff2',
                    revision: '452b6f9a7bee742983edd914179ae626'
                },
                {
                    url: '/_next/static/media/299c58d589315bf4-s.woff2',
                    revision: 'e7df1018686ed0e9832cfc332ad366fd'
                },
                {
                    url: '/_next/static/media/2a28c294ba0ddb8d-s.woff2',
                    revision: '9332add8d536b16fcfcda5e65701817f'
                },
                {
                    url: '/_next/static/media/2c046152d69c8665-s.woff2',
                    revision: '30c112d1d50c676a02489f567147cf50'
                },
                {
                    url: '/_next/static/media/2dde13cba929cceb-s.woff2',
                    revision: '0fb5befe47282dd8bde854d73cbd3df6'
                },
                {
                    url: '/_next/static/media/2e3fe16cfb6500ab-s.woff2',
                    revision: 'cf52a94139931a7c1e82d4d447c1904e'
                },
                {
                    url: '/_next/static/media/2e911975412467c6-s.woff2',
                    revision: '0b2e641770163bfee8b010605b05043a'
                },
                {
                    url: '/_next/static/media/2f0c9b3865466e05-s.woff2',
                    revision: '00bb8c0dbaedd4fa18b12a2e730e74d3'
                },
                {
                    url: '/_next/static/media/2f2005254cf8138e-s.woff2',
                    revision: '7201f948e63d0e1ef179de2476ea6502'
                },
                {
                    url: '/_next/static/media/2f44907c5b5e3de0-s.woff2',
                    revision: '3429743e6847996d4d13fc70f4c6aeb8'
                },
                {
                    url: '/_next/static/media/2f648bc58d3c7a5c-s.woff2',
                    revision: '299c732d7800938ea054ddff130780be'
                },
                {
                    url: '/_next/static/media/2fe5ea1b6bc78a83-s.woff2',
                    revision: 'd2fac73c84494483762922fc06dbf60f'
                },
                {
                    url: '/_next/static/media/3044774e1d54cc1c-s.woff2',
                    revision: 'a465804be093237715d466cadc87bdb3'
                },
                {
                    url: '/_next/static/media/3120dc655b257ccf-s.woff2',
                    revision: '16799712ad877ca35f0baa06ea278ca8'
                },
                {
                    url: '/_next/static/media/318ee22ada9a3682-s.woff2',
                    revision: 'da21a7a332571cf56059b4be74713783'
                },
                {
                    url: '/_next/static/media/333bd766be3cdda8-s.woff2',
                    revision: 'abd37c6a298bdcee9ec8acfc61c56cf5'
                },
                {
                    url: '/_next/static/media/34515b185c8766ed-s.woff2',
                    revision: '9603986bf1f326bec777b2cd2d97f9c4'
                },
                {
                    url: '/_next/static/media/349acdf0ed7a948b-s.woff2',
                    revision: '50b8429b7f368123968d76763b3b02ff'
                },
                {
                    url: '/_next/static/media/34eea13cb394a425-s.woff2',
                    revision: '48bf296ef50cb338d9d2267dbd600ce1'
                },
                {
                    url: '/_next/static/media/3515dcdf3e489890-s.woff2',
                    revision: 'dfcf9653b89cdeec5bcf7d857898b41d'
                },
                {
                    url: '/_next/static/media/3571dc36787e1fb7-s.woff2',
                    revision: 'd1c8f4a4a24418d4dc5bb5a950660184'
                },
                {
                    url: '/_next/static/media/35886f795600c88f-s.woff2',
                    revision: '3922d170ae36669d5632e115941ca016'
                },
                {
                    url: '/_next/static/media/36350854f5f459a5-s.woff2',
                    revision: 'c90d62831a3b373a22937ec714335e82'
                },
                {
                    url: '/_next/static/media/3751b46f0cc8ffc0-s.woff2',
                    revision: '3c4cd13fa2dcd3352a4da43eed2af5f9'
                },
                {
                    url: '/_next/static/media/387838e4fdeac597-s.woff2',
                    revision: '90e609d6e40cdb3e42677f923b10a6bd'
                },
                {
                    url: '/_next/static/media/38a46bc2cf9558d2-s.woff2',
                    revision: '4104b2b37abc7722668aa2c438590816'
                },
                {
                    url: '/_next/static/media/397de44f21f0df04-s.woff2',
                    revision: 'd5522d122baa6aaf8aa44aefa3d42a56'
                },
                {
                    url: '/_next/static/media/39bee220242d700f-s.woff2',
                    revision: 'aba4adb6bc379ce518fa54c0393f756f'
                },
                {
                    url: '/_next/static/media/39d41506c7b5104c-s.woff2',
                    revision: '3b96c1745d80e815c6624f6b258187bf'
                },
                {
                    url: '/_next/static/media/3b1f0b066af8473f-s.woff2',
                    revision: '7a85bf43fa9c4328eb9f8d0a85ab5bb7'
                },
                {
                    url: '/_next/static/media/3b90323dd4c53e9a-s.woff2',
                    revision: '836ab0c0a7d2f0cdf4ea732d70541a86'
                },
                {
                    url: '/_next/static/media/3bedc221a6bbc73b-s.woff2',
                    revision: 'e5b44c508821d761d8b801bd569f9cfb'
                },
                {
                    url: '/_next/static/media/3c42c52de313c4d5-s.woff2',
                    revision: '2df769b502c5fcf640996119eb8ff176'
                },
                {
                    url: '/_next/static/media/3cc480f26447d3f4-s.woff2',
                    revision: '350c93a99276e50d1b6d568281d4141e'
                },
                {
                    url: '/_next/static/media/3cf5232c9acac826-s.woff2',
                    revision: '9671d8596cb3a3d8590bf1da3947b113'
                },
                {
                    url: '/_next/static/media/3dc859ca773b41e7-s.woff2',
                    revision: '2f6adda3eb453d69b94c6923b93df576'
                },
                {
                    url: '/_next/static/media/3e83c8b9781da49f-s.woff2',
                    revision: '7302aa16bfef882c238b41468f8c38a9'
                },
                {
                    url: '/_next/static/media/3f20ce63bb57fcbe-s.woff2',
                    revision: '4d7e106a509d07bf61cac7183412655d'
                },
                {
                    url: '/_next/static/media/3fa88fe210d9e23b-s.woff2',
                    revision: '2cc4e0409f2f245e5778d1fd341a0706'
                },
                {
                    url: '/_next/static/media/4267f749fe0ff01f-s.woff2',
                    revision: '8dac5d0dc35e42a4b932a3c6c072caf6'
                },
                {
                    url: '/_next/static/media/429a09c9a2b2d5d6-s.woff2',
                    revision: 'e7a521116d6639ed29d93e5e6528eb1e'
                },
                {
                    url: '/_next/static/media/429e24214f40f3d1-s.woff2',
                    revision: '1cb02988b6b2432826810ae2cd19f713'
                },
                {
                    url: '/_next/static/media/42a41d6f90ca27b1-s.woff2',
                    revision: 'a6f28de823b53b716d0147021723e825'
                },
                {
                    url: '/_next/static/media/435448e75fa5ee63-s.woff2',
                    revision: '5cf994f6fc1b0b8477ccd6643e5abf3e'
                },
                {
                    url: '/_next/static/media/45a0cfac6c6fe56d-s.woff2',
                    revision: '3dc7d00d186ff994f9eceedcc5ea80fb'
                },
                {
                    url: '/_next/static/media/4605abb6e474bb84-s.woff2',
                    revision: 'fca2270aa09c6d03c704f273378cce80'
                },
                {
                    url: '/_next/static/media/467d807d15ac05d0-s.woff2',
                    revision: '6a9f86d0a7f0991f3129f7051159fee0'
                },
                {
                    url: '/_next/static/media/468dbbc2c32f6178-s.woff2',
                    revision: '7dfb23448052c3537def514d8ea5517e'
                },
                {
                    url: '/_next/static/media/4867f17d87d5a353-s.woff2',
                    revision: 'c70f5549d8d824a94cb7e84613d66aef'
                },
                {
                    url: '/_next/static/media/48a0c4a37e7d2d96-s.woff2',
                    revision: 'f2e497b017d8757edf91a51178f294d9'
                },
                {
                    url: '/_next/static/media/4a93799898ea0289-s.woff2',
                    revision: '5657a68e8697f7d0ebef1d8687e87940'
                },
                {
                    url: '/_next/static/media/4aca5df20d631376-s.woff2',
                    revision: '76a71467cd3c6caab7848888a5d60ab5'
                },
                {
                    url: '/_next/static/media/4bb43c6f0975b94e-s.woff2',
                    revision: '89458e7570e9327f76700a8026c146e8'
                },
                {
                    url: '/_next/static/media/4bbfd3ce143f8440-s.woff2',
                    revision: '4a86bb996814dbb0f52db8adee0912d9'
                },
                {
                    url: '/_next/static/media/4cb59d5337a9cd85-s.woff2',
                    revision: 'ada1eb22dea4a815a4925fb351f5ebfb'
                },
                {
                    url: '/_next/static/media/4d1e2ef00c7cb50b-s.woff2',
                    revision: '62fd25daa9b6c126f4b957082020f7ec'
                },
                {
                    url: '/_next/static/media/4e11f55e1ef60921-s.woff2',
                    revision: '7ff0967081fb1fb841a4cda3b69a6911'
                },
                {
                    url: '/_next/static/media/4ef432ab7e1a16e8-s.woff2',
                    revision: '7ad73c87f5b1a1718111f7897f9fabbd'
                },
                {
                    url: '/_next/static/media/4f99be100b0e27b2-s.woff2',
                    revision: 'd81e01e275a8a340f625b3daf7edad58'
                },
                {
                    url: '/_next/static/media/502d6ad489d0f30f-s.woff2',
                    revision: '9052566be107b7f366f0220505c0b537'
                },
                {
                    url: '/_next/static/media/50cfc336e1ad6076-s.woff2',
                    revision: '70fcf80b6374c0a35a13ea7ddce52d91'
                },
                {
                    url: '/_next/static/media/520117a66a7ba836-s.woff2',
                    revision: '3376e6efb6c645b5202821ba8db177da'
                },
                {
                    url: '/_next/static/media/529bd20adcb56129-s.woff2',
                    revision: '7573edc13d1ca6b81742ca5d7ab5a697'
                },
                {
                    url: '/_next/static/media/52aae37d66f9b18b-s.woff2',
                    revision: '54f9253251bf051abfa3bea0e7f98b21'
                },
                {
                    url: '/_next/static/media/530f38d552a49ded-s.woff2',
                    revision: 'b0a1f21a4da2413274342d44c00464b2'
                },
                {
                    url: '/_next/static/media/533328ec97ab7470-s.woff2',
                    revision: '9cf4221b978348813fff71c1def65918'
                },
                {
                    url: '/_next/static/media/5362087f295c19ad-s.woff2',
                    revision: '34cfa265c930be4e16b2f4fb61c30a51'
                },
                {
                    url: '/_next/static/media/53ba8f94df10191f-s.woff2',
                    revision: '17f5a1c8fa540fdc13ecfd7ec85fa29e'
                },
                {
                    url: '/_next/static/media/549188ce5b0213e0-s.woff2',
                    revision: '752bd89956b13cb0f0891b15e98abbe3'
                },
                {
                    url: '/_next/static/media/5532623b75065c2e-s.woff2',
                    revision: '99ed5717d5fb661c769b58bbe174488c'
                },
                {
                    url: '/_next/static/media/55fa3fd3c72cf491-s.woff2',
                    revision: 'e8a236cbde623f71ff10df5b1be3247b'
                },
                {
                    url: '/_next/static/media/563e927f5a0fe1a0-s.woff2',
                    revision: '04baa75cbaf83f893369aac7e62f2ae9'
                },
                {
                    url: '/_next/static/media/569ce4b8f30dc480-s.p.woff2',
                    revision: 'ef6cefb32024deac234e82f932a95cbd'
                },
                {
                    url: '/_next/static/media/56aef3458b01c6eb-s.woff2',
                    revision: '832bbb4115049d83d0e0144e60b1993b'
                },
                {
                    url: '/_next/static/media/56f1c56542934af8-s.woff2',
                    revision: '584cb6e598c545ffbba04e52be01af49'
                },
                {
                    url: '/_next/static/media/5987cedf78a299a4-s.woff2',
                    revision: 'a78e47b6e2f55596a63beeb091874cb6'
                },
                {
                    url: '/_next/static/media/5a6c334e80fffaf8-s.woff2',
                    revision: '7e12f8c84977dee8c79a78b4da54780d'
                },
                {
                    url: '/_next/static/media/5ab0e9477c20afc1-s.woff2',
                    revision: '4e6610669e04545913d17e330a7f6948'
                },
                {
                    url: '/_next/static/media/5afc68065eab8737-s.woff2',
                    revision: '6fac4ca84b42bb38340e38b9977baa8b'
                },
                {
                    url: '/_next/static/media/5c1407982727089d-s.woff2',
                    revision: '40e36f34e6c130fbe2e799a908c7f825'
                },
                {
                    url: '/_next/static/media/5e05adceb587195f-s.woff2',
                    revision: '2600730b6342a165455ac7a0a1084068'
                },
                {
                    url: '/_next/static/media/5eaaf3d545ca615e-s.woff2',
                    revision: '02104440e3bffb3e34255e428889a413'
                },
                {
                    url: '/_next/static/media/5f38b0ba98bac2ba-s.woff2',
                    revision: '50c6abc679e44a0572a72c264fff96ac'
                },
                {
                    url: '/_next/static/media/5f85be03e9dd17c2-s.woff2',
                    revision: '002199b5e9c0c46a6192993704c8ecd7'
                },
                {
                    url: '/_next/static/media/60bca3914338dd03-s.woff2',
                    revision: '312d64447adf168e47fb28714858359b'
                },
                {
                    url: '/_next/static/media/60f8b92a5755190b-s.woff2',
                    revision: '308679670c5e506bf3ab17827c610cb2'
                },
                {
                    url: '/_next/static/media/614032f9d0d19f17-s.woff2',
                    revision: 'f0a28fda8144b818782b7073641dfa80'
                },
                {
                    url: '/_next/static/media/618a0f909c630fd3-s.woff2',
                    revision: '202165a72a4cc5b14bf66e8e11814b86'
                },
                {
                    url: '/_next/static/media/62a35b1059471fc5-s.woff2',
                    revision: '7b5076724c7275b1c566854135b9f314'
                },
                {
                    url: '/_next/static/media/62e83259d2bcfe22-s.woff2',
                    revision: '68019808c72634a8ffc3c3c01f8f24d9'
                },
                {
                    url: '/_next/static/media/6331f0071f2f74e3-s.woff2',
                    revision: '290009c0bf919032d358095bb344c80c'
                },
                {
                    url: '/_next/static/media/6398d2750e3160a8-s.woff2',
                    revision: '072c5554ab12b5aaf559303be0747e9d'
                },
                {
                    url: '/_next/static/media/63cada980727a453-s.woff2',
                    revision: 'c0cc7488f94a45705a0408a923860b88'
                },
                {
                    url: '/_next/static/media/65014f1194bb04e2-s.woff2',
                    revision: 'bba5126fbfee8f0ace7627aeacc7cd51'
                },
                {
                    url: '/_next/static/media/653e1a6f7e8644bf-s.woff2',
                    revision: '6f68a33707afea02c677b0b2881bb855'
                },
                {
                    url: '/_next/static/media/65dc75d47e04f839-s.woff2',
                    revision: '233fb5e6844507f231d0ed5fa7ff757c'
                },
                {
                    url: '/_next/static/media/685416660c3bee4f-s.woff2',
                    revision: '6a291b934fdd83aa924fda208ab20b1d'
                },
                {
                    url: '/_next/static/media/694d2933e1c713ce-s.woff2',
                    revision: 'ba7c07ab6cd20e0c99a9fce952aec68a'
                },
                {
                    url: '/_next/static/media/6a36db0311a9e290-s.woff2',
                    revision: 'ed0cd24cac08700df87a14af3667e2f0'
                },
                {
                    url: '/_next/static/media/6ad7d62b0f7d63e4-s.woff2',
                    revision: 'fe10334546bcb1793471281348fc3c76'
                },
                {
                    url: '/_next/static/media/6afd320d6bbbe3b3-s.woff2',
                    revision: 'cc43b4e5dd8032ec8d862e0a810b6e5e'
                },
                {
                    url: '/_next/static/media/6b9edf717a7bfdad-s.woff2',
                    revision: '4600987396d5a58346f69c53fd283506'
                },
                {
                    url: '/_next/static/media/6c1d3e1a02c4bd06-s.p.woff2',
                    revision: '6166fc8e3606cf273407c98881118626'
                },
                {
                    url: '/_next/static/media/6c28c5e4363997ab-s.woff2',
                    revision: '26e8f30a1f2c07d78b0ec808bfb26a14'
                },
                {
                    url: '/_next/static/media/6c56d6b9961a8f22-s.woff2',
                    revision: 'cdd01d6a372fb1395aea64a372b99e50'
                },
                {
                    url: '/_next/static/media/6c63cafb99771657-s.woff2',
                    revision: '371a48f15e3a9c72b3497db467684d7c'
                },
                {
                    url: '/_next/static/media/6c8a8389560494b7-s.woff2',
                    revision: '4b9d896ed09e17f44d1824a95dd2b576'
                },
                {
                    url: '/_next/static/media/6d081f3f73093e7e-s.woff2',
                    revision: 'e72876704a3e89997be5af7bf2358a4a'
                },
                {
                    url: '/_next/static/media/6da023689f345cf7-s.woff2',
                    revision: '8b96b091defe4b4ae653353cdcc12323'
                },
                {
                    url: '/_next/static/media/6da16a25cd948f3b-s.woff2',
                    revision: 'd670edf69b97c22efb5be2d19ef02015'
                },
                {
                    url: '/_next/static/media/6dae081418abfe5c-s.woff2',
                    revision: '0d8799e158eaeeb1fe2d3d6a11a76fb1'
                },
                {
                    url: '/_next/static/media/70764ebfc7208e24-s.woff2',
                    revision: '49c06fba3cd0639fdb816f916a44590c'
                },
                {
                    url: '/_next/static/media/712b58b540412943-s.woff2',
                    revision: '16c273e96896b672f6e15981be01d688'
                },
                {
                    url: '/_next/static/media/71494b83ddc040bf-s.woff2',
                    revision: '102a9214de488d7d1b164c1c373f3173'
                },
                {
                    url: '/_next/static/media/71e44265cd6baae6-s.woff2',
                    revision: '7527cecdae1c1dbb186f5ee2a981b754'
                },
                {
                    url: '/_next/static/media/7280640b557fde6e-s.woff2',
                    revision: 'baf670e3fe6560817d76e09b4203a60b'
                },
                {
                    url: '/_next/static/media/72e65dfca68f885a-s.woff2',
                    revision: '5ee4657dd9f42c5c6616239b5e25c8f8'
                },
                {
                    url: '/_next/static/media/747892c23ea88013-s.woff2',
                    revision: 'a0761690ccf4441ace5cec893b82d4ab'
                },
                {
                    url: '/_next/static/media/74cf3782d74f7798-s.woff2',
                    revision: '57235fd988ff009b9f6b24e8d085b687'
                },
                {
                    url: '/_next/static/media/76742baf8508dabc-s.woff2',
                    revision: '0c240b19c2152d486785dc88432fcd42'
                },
                {
                    url: '/_next/static/media/76f85175de9485bf-s.woff2',
                    revision: 'f04a2239d7696e597d9d9af11c8b1890'
                },
                {
                    url: '/_next/static/media/77ea56196ff8ff63-s.woff2',
                    revision: 'aecd7e10da92c045e68c42f3b6f8a4bd'
                },
                {
                    url: '/_next/static/media/784ccdfee4132171-s.woff2',
                    revision: '1b13d1b9e634c285de131aa4ca5bc319'
                },
                {
                    url: '/_next/static/media/7915bf8d07af2be8-s.woff2',
                    revision: '04e75799354be28a40f8310f93c3e2d6'
                },
                {
                    url: '/_next/static/media/7a3e742a14a198c6-s.woff2',
                    revision: '73e3e1b6e1d6b2467ef47e720a6952a7'
                },
                {
                    url: '/_next/static/media/7b245b333152f9c5-s.woff2',
                    revision: '6a7c2f2d11dbe09c9ab2304480c8a411'
                },
                {
                    url: '/_next/static/media/7d2ae9263deff332-s.woff2',
                    revision: 'c1915f85af82c0c7b48e752e64651712'
                },
                {
                    url: '/_next/static/media/7daac35721d0ddd3-s.woff2',
                    revision: 'dd10ebc963516fbbd9507f98b8dcb438'
                },
                {
                    url: '/_next/static/media/7dc855ce711afbdf-s.woff2',
                    revision: 'c83100e375d6da735fa6a67841ac3de9'
                },
                {
                    url: '/_next/static/media/7e1b26adf0a9612b-s.woff2',
                    revision: '563d4a5dfc0a48c687faeea3b54e693d'
                },
                {
                    url: '/_next/static/media/7f6ebdf3c3f97420-s.woff2',
                    revision: '534b02c3da2d2b99535e4f2056865974'
                },
                {
                    url: '/_next/static/media/7fefb60548894a38-s.woff2',
                    revision: 'c4edbf4aaf2518a352e758ff6e1d281e'
                },
                {
                    url: '/_next/static/media/810a12ab927d6ddf-s.woff2',
                    revision: 'f8812bdc4d37ea390552e4f1539d315f'
                },
                {
                    url: '/_next/static/media/8307bb9269b9d5f5-s.woff2',
                    revision: 'b4b193a20aaeaa5c49a52057e2117991'
                },
                {
                    url: '/_next/static/media/8356bc88c9aceb8c-s.woff2',
                    revision: 'f42d36a42e8482a90aca3b127b8ad5ad'
                },
                {
                    url: '/_next/static/media/83703df5507afec0-s.woff2',
                    revision: '25d645c26cd5cff1ba2e5f05a9af0a83'
                },
                {
                    url: '/_next/static/media/83febaafa344ce92-s.woff2',
                    revision: '4c20b50eb0997b4d9151b2f0ed47a56b'
                },
                {
                    url: '/_next/static/media/84e1a9fbe9853704-s.woff2',
                    revision: '17248bab186037be73cd9b61d8df2e44'
                },
                {
                    url: '/_next/static/media/84fd05e253f7fd33-s.woff2',
                    revision: '9ae13cfddfd54cee3c6c05d38eb53bae'
                },
                {
                    url: '/_next/static/media/85577d0930f647c9-s.woff2',
                    revision: '077785bf61fb7069f33ede49cbd21e63'
                },
                {
                    url: '/_next/static/media/859a0dca9e0c6ce2-s.woff2',
                    revision: '85bd2fdb4818301ee7e95dee4a7b3810'
                },
                {
                    url: '/_next/static/media/85ae9b4f4e1f55b0-s.woff2',
                    revision: '2e07a28d48543ec20b6060bbb7d6f269'
                },
                {
                    url: '/_next/static/media/85e882c981d7477f-s.woff2',
                    revision: 'd929a648bf7ec70d177e570c34e8247c'
                },
                {
                    url: '/_next/static/media/8704d7ab2885d649-s.woff2',
                    revision: 'a0109c3c08307ab01f9332229602a91b'
                },
                {
                    url: '/_next/static/media/870cdc01bb73440a-s.woff2',
                    revision: '8c4bedb8e336f2baf4dad2cfb7088a58'
                },
                {
                    url: '/_next/static/media/87e36b9f82dba8bb-s.woff2',
                    revision: '054ff022400ab739db96c3c27843a909'
                },
                {
                    url: '/_next/static/media/882939abc0b2803c-s.woff2',
                    revision: '739383d7a4be46aa130194349d59ce0f'
                },
                {
                    url: '/_next/static/media/892780af3fb026ed-s.woff2',
                    revision: 'afd4a4438076ff1edc3b29b93adb73f3'
                },
                {
                    url: '/_next/static/media/893138dcb91f6663-s.woff2',
                    revision: '6320026e4456a21c07f8a17705106076'
                },
                {
                    url: '/_next/static/media/89ab80d3cd33729f-s.woff2',
                    revision: '6c79f9e5a7e1adc456af4d69078688b9'
                },
                {
                    url: '/_next/static/media/8b650c63969d5385-s.woff2',
                    revision: '42388f52620127aca6ef05ae596a48b0'
                },
                {
                    url: '/_next/static/media/8caed38ee1484b26-s.woff2',
                    revision: '6aced29b250b0b8720ad95e1186174b8'
                },
                {
                    url: '/_next/static/media/8d0031a6efb26892-s.woff2',
                    revision: '6ecbf2f959ea5b9322b2cc3d00a6ed93'
                },
                {
                    url: '/_next/static/media/8d697b304b401681-s.woff2',
                    revision: 'cc728f6c0adb04da0dfcb0fc436a8ae5'
                },
                {
                    url: '/_next/static/media/8e272604d9a1a0fc-s.woff2',
                    revision: 'df9dca630fa12ba71e259d179f59e0f0'
                },
                {
                    url: '/_next/static/media/8e2878f35543a4c9-s.woff2',
                    revision: '1cb9ea7835e7854e3474046b88e8170a'
                },
                {
                    url: '/_next/static/media/8e3d7a069c3758cc-s.woff2',
                    revision: 'a78b36f1b7d712f84b89c7cd1f1af95c'
                },
                {
                    url: '/_next/static/media/8f715cec785b56a0-s.woff2',
                    revision: '870a3b57680043beb823d2bbc22bc313'
                },
                {
                    url: '/_next/static/media/8fc78b5a33cc414c-s.woff2',
                    revision: 'ecacc9a51f14964e074a406da9232937'
                },
                {
                    url: '/_next/static/media/9101c4f9a2fa2f40-s.woff2',
                    revision: 'afe2d44ddad96064b6acb894068ff31e'
                },
                {
                    url: '/_next/static/media/915abe235506c32b-s.woff2',
                    revision: 'ef93453be99f9f0d7f68266cb5e8c880'
                },
                {
                    url: '/_next/static/media/9188e242ef08da77-s.woff2',
                    revision: '7aa475a95b75893b9502ff41f6151823'
                },
                {
                    url: '/_next/static/media/91afe8735e66cfe1-s.woff2',
                    revision: '8ceda6dffa7a0d08c2ee27738223ab49'
                },
                {
                    url: '/_next/static/media/92fd8d7711d4e44f-s.woff2',
                    revision: '2fef9d9a4f1bcf1ea6d1b9441626af99'
                },
                {
                    url: '/_next/static/media/933f24feb95e5b64-s.woff2',
                    revision: 'a2eeafffb428ad2bcd9e64f26e94d702'
                },
                {
                    url: '/_next/static/media/938473a671f41906-s.woff2',
                    revision: '3fed72d8f2c12e6393cd86cc9d0842f7'
                },
                {
                    url: '/_next/static/media/93f479601ee12b01-s.p.woff2',
                    revision: 'da83d5f06d825c5ae65b7cca706cb312'
                },
                {
                    url: '/_next/static/media/9610d9e46709d722-s.woff2',
                    revision: '7b7c0ef93df188a852344fc272fc096b'
                },
                {
                    url: '/_next/static/media/96ff03a0d37ca0cc-s.woff2',
                    revision: '7c809f6a3ff8645bcaeb20e11ea42247'
                },
                {
                    url: '/_next/static/media/97a5d9037dfc2964-s.woff2',
                    revision: 'e6850eb8e6d77f735e62c5f5d82b7d9a'
                },
                {
                    url: '/_next/static/media/980fb219a927b3ec-s.p.woff2',
                    revision: 'c683c4fc6562af61f4b1620e40635793'
                },
                {
                    url: '/_next/static/media/98b9ea372b08b751-s.woff2',
                    revision: '68147e9c3f79f9c8b665308276d69b75'
                },
                {
                    url: '/_next/static/media/992a0396e2b4f5b1-s.woff2',
                    revision: '06229c7804613938554aae77076d7d66'
                },
                {
                    url: '/_next/static/media/9a13da787b75cead-s.woff2',
                    revision: '6d70b61166a76f6eaa3336f162c3fc28'
                },
                {
                    url: '/_next/static/media/9a1f7ba304aeeecf-s.woff2',
                    revision: '7aec3edf1326878b1674bcb93dd4a483'
                },
                {
                    url: '/_next/static/media/9afba82686c22962-s.woff2',
                    revision: '057eaf74fdb721cc4b9f9d53147c628c'
                },
                {
                    url: '/_next/static/media/9c10920ae9aa448b-s.woff2',
                    revision: 'cb96560d8287031c7bd1e78fec38e55c'
                },
                {
                    url: '/_next/static/media/9c23e59a0c4625c9-s.woff2',
                    revision: '3872fc5bafa867c0d1379df9fb766fee'
                },
                {
                    url: '/_next/static/media/9dfbb05d946afcd6-s.woff2',
                    revision: '289314d0b294f4fdf8f9c6a87a0152d5'
                },
                {
                    url: '/_next/static/media/9fbec714bdb25d9c-s.woff2',
                    revision: '3f0d1658a97c6d8a5b028866f4cab627'
                },
                {
                    url: '/_next/static/media/a0ade0cbbb99f32c-s.woff2',
                    revision: '933552228444e96f4badbaedba693195'
                },
                {
                    url: '/_next/static/media/a125f4066530dadd-s.woff2',
                    revision: '4de18313b50eab0e4937a4875ae8461e'
                },
                {
                    url: '/_next/static/media/a15f2fce4b98b461-s.p.woff2',
                    revision: '3f0d038cee19fede70f342b6fdf2ef9a'
                },
                {
                    url: '/_next/static/media/a498d11e2da60f85-s.woff2',
                    revision: 'af897da32237075113601612cc0fa2f8'
                },
                {
                    url: '/_next/static/media/a621347f664b2a4d-s.woff2',
                    revision: '75a20e9e0de33b664d1f72157f4e4660'
                },
                {
                    url: '/_next/static/media/a690d484a1c0b3db-s.woff2',
                    revision: '5cfad124d040557ac22ed2526516cc68'
                },
                {
                    url: '/_next/static/media/a78bba587d6a308c-s.woff2',
                    revision: '853daac0ebb2ef205ae0dd8b48e566c5'
                },
                {
                    url: '/_next/static/media/a7f73f9ae91daea3-s.woff2',
                    revision: 'd1e064dfe6278eee632546c5ea03b4f1'
                },
                {
                    url: '/_next/static/media/a86f5e65bb27087b-s.woff2',
                    revision: '53f3794005ecaab698c60718212deefd'
                },
                {
                    url: '/_next/static/media/a94db81185bfcb96-s.woff2',
                    revision: 'df964f010c5d8c9c6adb5b86fb097603'
                },
                {
                    url: '/_next/static/media/aa40919727fba93d-s.woff2',
                    revision: '144cc1fe7045a7e3a1c644c9319bd292'
                },
                {
                    url: '/_next/static/media/aa70556e250acb94-s.woff2',
                    revision: '3465ee57a0f68cc9931b99a5afc9445d'
                },
                {
                    url: '/_next/static/media/aa7db2ad41bd25ba-s.woff2',
                    revision: '0f044695cec44ab72605c2751344c05d'
                },
                {
                    url: '/_next/static/media/abb68bc4015e0e57-s.woff2',
                    revision: '025ac57d40e0c392f890d57623cf73be'
                },
                {
                    url: '/_next/static/media/accb5b304442de50-s.woff2',
                    revision: '912db6004cd71579283aff90418232a7'
                },
                {
                    url: '/_next/static/media/ad3743ffcdde31f9-s.woff2',
                    revision: '37c1fbab2547ea04156610cb433986ac'
                },
                {
                    url: '/_next/static/media/ae696edaac47af9c-s.woff2',
                    revision: '3ab29966cd55d0fa15f94560fd4b6831'
                },
                {
                    url: '/_next/static/media/aed5f820244f2ee5-s.p.woff2',
                    revision: 'a5b6a589216059399dd055401e4a4463'
                },
                {
                    url: '/_next/static/media/af9118001ee64e13-s.woff2',
                    revision: 'cc80fe2a8e218695b0d342683dad1743'
                },
                {
                    url: '/_next/static/media/b02bac4e4cf559dc-s.woff2',
                    revision: '15cec44fb754939fc5c0dfb013cfc9ee'
                },
                {
                    url: '/_next/static/media/b0362587474384cd-s.woff2',
                    revision: 'f0061d0abbbddbe7b866dd85a20d56b4'
                },
                {
                    url: '/_next/static/media/b06ce8ef4a357eda-s.woff2',
                    revision: '1ea615d200faf3c044d9e8b7de64af99'
                },
                {
                    url: '/_next/static/media/b0b84cae34b4bea2-s.woff2',
                    revision: '75276d9247c4e43ee0581303388688af'
                },
                {
                    url: '/_next/static/media/b21ea768b838ad24-s.woff2',
                    revision: '57f09fc85bb4593f9f12d993f04b2ce4'
                },
                {
                    url: '/_next/static/media/b27412c4d8ac9e78-s.woff2',
                    revision: 'd30e872e33f87851e613f9a94c82cacc'
                },
                {
                    url: '/_next/static/media/b27c706639ed0ce8-s.woff2',
                    revision: '69bec2a0895e3f10e18ce72932ca4734'
                },
                {
                    url: '/_next/static/media/b28d7f96009b98c8-s.woff2',
                    revision: '455e79886505544d68aebd8beb16b55a'
                },
                {
                    url: '/_next/static/media/b2f0ba1cb1abb8d4-s.woff2',
                    revision: 'cc57580f80c430ec1aa7b10c3f0ff292'
                },
                {
                    url: '/_next/static/media/b3781132b3be7073-s.woff2',
                    revision: '0fdf9f981eccb8b587435ce8716c6fa1'
                },
                {
                    url: '/_next/static/media/b485136457214f4b-s.woff2',
                    revision: '58f4a58e1cb5b5ce86cfd87b7e0dff2f'
                },
                {
                    url: '/_next/static/media/b5866022a24c850d-s.woff2',
                    revision: 'fdae219d61ca1805645976dddb88c490'
                },
                {
                    url: '/_next/static/media/b5b0c2bb15d1a531-s.woff2',
                    revision: '62025f72e7d99b8bc4359782ca37e247'
                },
                {
                    url: '/_next/static/media/b720e08fc0489e8d-s.woff2',
                    revision: '9afaa0c2a3004bdd0332c39764216e77'
                },
                {
                    url: '/_next/static/media/b73117315ab8e409-s.woff2',
                    revision: '90320b8d1c9a91948da4b95a48d89dee'
                },
                {
                    url: '/_next/static/media/b737e516a2777308-s.woff2',
                    revision: 'd00bab6eb12013a51febfaad3d58861d'
                },
                {
                    url: '/_next/static/media/b7c043fc111ea04c-s.woff2',
                    revision: '3459d9613a75fcca560e7f0189599a57'
                },
                {
                    url: '/_next/static/media/b84676a33e32a8e0-s.woff2',
                    revision: '55f0826e2b89ecf2bf59cb7b5c437dfd'
                },
                {
                    url: '/_next/static/media/b8605ffda2c293dd-s.woff2',
                    revision: 'bd860fe387de5f7fa78921714e42e080'
                },
                {
                    url: '/_next/static/media/b8cc49c4b9251b5f-s.woff2',
                    revision: '36badda528929fd7721063709821a0b9'
                },
                {
                    url: '/_next/static/media/b8eb208df1b2f25e-s.woff2',
                    revision: 'b13407e7b0eee21af3482ba920af1ab8'
                },
                {
                    url: '/_next/static/media/b90f702fec14e0c6-s.woff2',
                    revision: '77b0cf4739ee982e200276098e2f2da2'
                },
                {
                    url: '/_next/static/media/b9549fcb84f94c79-s.woff2',
                    revision: '2a138d14dbcf5cae5d6fda44c7ca5ceb'
                },
                {
                    url: '/_next/static/media/b99e8bb3a430f36c-s.woff2',
                    revision: 'fc77cc2f4828cf4847d7f01dec3a7bee'
                },
                {
                    url: '/_next/static/media/b9f11b1a528ed956-s.woff2',
                    revision: '064ea53272683f26ee6ac0d88b0b0593'
                },
                {
                    url: '/_next/static/media/ba003e23a28450e7-s.woff2',
                    revision: 'a949cce22621d0167d579a66c57e39e5'
                },
                {
                    url: '/_next/static/media/ba015fad6dcf6784-s.woff2',
                    revision: '8ea4f719af3312a055caf09f34c89a77'
                },
                {
                    url: '/_next/static/media/bbc68ae119ea66c6-s.woff2',
                    revision: '7e127dbe44357fa6c1e9ee8fc7d74544'
                },
                {
                    url: '/_next/static/media/bc726254f52404d2-s.woff2',
                    revision: '2c6fe6b33528a651273af446fd22fd64'
                },
                {
                    url: '/_next/static/media/bcacafc6021aa5b2-s.woff2',
                    revision: '55f7f97e2f1ed13053cdb6fdc170bcc0'
                },
                {
                    url: '/_next/static/media/bd5f611dd152c2b3-s.woff2',
                    revision: '5d8a0de71916f7566faa9f8f5eeda34c'
                },
                {
                    url: '/_next/static/media/bff888c74e444362-s.woff2',
                    revision: '087af070941f1127ae37c8f9d00626f0'
                },
                {
                    url: '/_next/static/media/c562c6e6b7975def-s.woff2',
                    revision: '9f2c6a4b33e34fdb5a69bbdd1f8a7430'
                },
                {
                    url: '/_next/static/media/c5e14d45967bbb5e-s.woff2',
                    revision: '59d649b59d66e9f62ffff666e66f87c1'
                },
                {
                    url: '/_next/static/media/c608e0c437d2a6fc-s.woff2',
                    revision: 'f819f2a99ef2c7b9d63420ecfe090172'
                },
                {
                    url: '/_next/static/media/c6a0b5670846dd2a-s.woff2',
                    revision: '5f201603c49f13023dd6db3dd49ebf68'
                },
                {
                    url: '/_next/static/media/c6fa766eb717dccb-s.woff2',
                    revision: '5737333696e0e3823c2eae7d88c6d647'
                },
                {
                    url: '/_next/static/media/c7a7b8e4e54792d7-s.woff2',
                    revision: '59d0f8b0b9e255d161a587f6e5063444'
                },
                {
                    url: '/_next/static/media/c7b0e98f802564b1-s.woff2',
                    revision: '4bb2f1169dc3a1f8668f735b739556d6'
                },
                {
                    url: '/_next/static/media/c7dddb0aa3786a9d-s.woff2',
                    revision: '042cfe76527c606e096b17c7a540cce4'
                },
                {
                    url: '/_next/static/media/c89ab73a8890fbed-s.woff2',
                    revision: '18df29aab1148c6950afda9b0637c372'
                },
                {
                    url: '/_next/static/media/c9232105d639dc4b-s.woff2',
                    revision: '929adb75b48ea09bcfd3da56cc0c993a'
                },
                {
                    url: '/_next/static/media/c970d8e7b7fb9a06-s.woff2',
                    revision: 'fb73e76d8a557beb66a6d505da3db22c'
                },
                {
                    url: '/_next/static/media/c973a1445980a649-s.woff2',
                    revision: 'ec89a4276d2a2c883fe3f93a7e903950'
                },
                {
                    url: '/_next/static/media/ca8dffbea5cc2a5d-s.woff2',
                    revision: '54d354228fe66f360e69369409b59d49'
                },
                {
                    url: '/_next/static/media/cc04a266478524d9-s.woff2',
                    revision: 'b77e417a592b0187d2eb69a8860d1758'
                },
                {
                    url: '/_next/static/media/cc1f5fabab25995c-s.woff2',
                    revision: 'c72ad705c0b330038824399bf3cea306'
                },
                {
                    url: '/_next/static/media/cc5d58d5ea94fcc4-s.woff2',
                    revision: 'a193ca92ce492d08089777c3479a361e'
                },
                {
                    url: '/_next/static/media/cc85df078d97f01a-s.woff2',
                    revision: '2c5263ee454676879d0aef34efd0f8af'
                },
                {
                    url: '/_next/static/media/cd769f5a1ca2d9c5-s.woff2',
                    revision: '3506cae512ac8790a3df9dd8532c9017'
                },
                {
                    url: '/_next/static/media/cf70e2a08f1f5f62-s.woff2',
                    revision: 'cfaad1817c13b671d589202d93a99794'
                },
                {
                    url: '/_next/static/media/d08be8d6d7602db8-s.woff2',
                    revision: '134c89c530f9653af36d2da57bc19729'
                },
                {
                    url: '/_next/static/media/d0a0342ed691a7f5-s.woff2',
                    revision: '17b4d3d80943f8e66bdd57997feee93e'
                },
                {
                    url: '/_next/static/media/d130f18b660bb2cf-s.woff2',
                    revision: 'aa5db53d212b0343db55f7add3d5291a'
                },
                {
                    url: '/_next/static/media/d261ed789f0f4e6d-s.woff2',
                    revision: '88b46115c969a8b3c5c51e6f3e082c27'
                },
                {
                    url: '/_next/static/media/d2621c18918d28b8-s.woff2',
                    revision: 'bf4f0bda7c5a122906d6fd8f649b847f'
                },
                {
                    url: '/_next/static/media/d2bdce22c69889c2-s.woff2',
                    revision: 'f49c658ca6ebd4c531a18e9727de50d1'
                },
                {
                    url: '/_next/static/media/d3310f2e2e8765f6-s.woff2',
                    revision: '1ba88f2b984d7b68501db0fcb3955bce'
                },
                {
                    url: '/_next/static/media/d52181ec8545aa95-s.woff2',
                    revision: '8ad45e4688bfffec531de73ad65e2aff'
                },
                {
                    url: '/_next/static/media/d5d5675f0c147195-s.p.woff2',
                    revision: '98aec78cc6ad8e0efdebd566d254397c'
                },
                {
                    url: '/_next/static/media/d84af7a8329983d7-s.woff2',
                    revision: 'd95a39954a7b90a9c0b4dd7bc6be019c'
                },
                {
                    url: '/_next/static/media/d8546a333dba48b4-s.woff2',
                    revision: '4129bbaa328fa780c623d364077f86f4'
                },
                {
                    url: '/_next/static/media/da99ae30fc536f3e-s.woff2',
                    revision: '0f3a7d69d9691b1f21395e4328ecd214'
                },
                {
                    url: '/_next/static/media/db0cc798630856fa-s.woff2',
                    revision: 'aa4cfe7085d82bb065ab14cbafe77d7f'
                },
                {
                    url: '/_next/static/media/dc5da0fdb1198adf-s.woff2',
                    revision: '06b434d326269209bfb7ef8ca86f7847'
                },
                {
                    url: '/_next/static/media/dcac8ea1d61718b5-s.woff2',
                    revision: 'fbaf1ad46505e1764c78d8a60dbff4ef'
                },
                {
                    url: '/_next/static/media/ddb9467c20b2b7b6-s.woff2',
                    revision: '14b27e0b64250a87d7485b533f5f2237'
                },
                {
                    url: '/_next/static/media/ddbadeeaa42c648c-s.woff2',
                    revision: '2eeb6bf73a6aadc8dd488e3e21571735'
                },
                {
                    url: '/_next/static/media/de1e43093eb6402c-s.woff2',
                    revision: '15e96601a4a7e5e418e906b6e669496a'
                },
                {
                    url: '/_next/static/media/de321ba1d8eb8113-s.woff2',
                    revision: '77412b338fb1fb3b3adee9bf6b37fcfd'
                },
                {
                    url: '/_next/static/media/de9f77d5d44c0fc2-s.woff2',
                    revision: '0c0db96adfe6641a597d2f255120d775'
                },
                {
                    url: '/_next/static/media/dedecf1453f3c20b-s.woff2',
                    revision: 'cd08a2fa2c2354ba82cafd4fd9971390'
                },
                {
                    url: '/_next/static/media/e0bde08f1e7fbc72-s.woff2',
                    revision: 'ae55304bf8c95c4a2db81defdaf650c7'
                },
                {
                    url: '/_next/static/media/e22f2bc1cf553548-s.woff2',
                    revision: '8eee3e813cb9f09cc5c0691d2dc830f9'
                },
                {
                    url: '/_next/static/media/e2c75a92fd39afbd-s.woff2',
                    revision: 'a629e4dfc82b0262f5f7ccaab51408ca'
                },
                {
                    url: '/_next/static/media/e44859446483d1d3-s.woff2',
                    revision: 'e8baf93f42898b588584b0fccc63a8dd'
                },
                {
                    url: '/_next/static/media/e616f68d80e02a5a-s.woff2',
                    revision: 'a967ce7febc5db7edf85eea66e747169'
                },
                {
                    url: '/_next/static/media/e8ac59c94b6ffc73-s.woff2',
                    revision: 'ffc900bf02d8b856bd545eddb8d33418'
                },
                {
                    url: '/_next/static/media/e8e0bbb6d4247975-s.woff2',
                    revision: 'bbdee6382dea249ab8f9a861561a1b54'
                },
                {
                    url: '/_next/static/media/e9f5af7ba17d31f0-s.woff2',
                    revision: 'efb1e30686bc7af5b166e7828363d47f'
                },
                {
                    url: '/_next/static/media/ea105787fbc8b550-s.woff2',
                    revision: 'fb170ec5d5cc7ab2fe0a0fc70d5ad2bb'
                },
                {
                    url: '/_next/static/media/ea30bc9c1bb91041-s.woff2',
                    revision: 'c58b7135e9da003416636f8a9c0c07bd'
                },
                {
                    url: '/_next/static/media/eba57749f42875c2-s.woff2',
                    revision: 'c48222af62c238b5a7d42141c74ab366'
                },
                {
                    url: '/_next/static/media/ec286e88baa6fd80-s.woff2',
                    revision: 'dfef69a8d0d85bafb9a26bb80fe6c7ae'
                },
                {
                    url: '/_next/static/media/ec802b205347a603-s.woff2',
                    revision: 'fdebb5bd65adbcf65c2e174048ef478c'
                },
                {
                    url: '/_next/static/media/ee364219295e16df-s.woff2',
                    revision: '081a453c3d5510e1bbfedeee7b7d1d28'
                },
                {
                    url: '/_next/static/media/ee5a0461435f8e6c-s.woff2',
                    revision: 'ae9605f310b3ff6be24d3d50fba3d7aa'
                },
                {
                    url: '/_next/static/media/eeb32f96af7caca6-s.woff2',
                    revision: '878a9763a0f8bf47aba07b132bf1e53e'
                },
                {
                    url: '/_next/static/media/efb74ea5725bacea-s.woff2',
                    revision: '5aa9125dcdaf1b1c5acd1e9aae9b9cb7'
                },
                {
                    url: '/_next/static/media/efd3c9f7dc8b4500-s.woff2',
                    revision: '23561bd2c1f58775df95f3de52123296'
                },
                {
                    url: '/_next/static/media/f0e13183b93fe06c-s.woff2',
                    revision: '1f9db9645be0de8a5de0eceda8aeb414'
                },
                {
                    url: '/_next/static/media/f14d9587d346a399-s.woff2',
                    revision: '1504045a563478666e0196e921ba03f3'
                },
                {
                    url: '/_next/static/media/f238ce09368a915e-s.woff2',
                    revision: '601037b19f77b31208cf7b6155582ab7'
                },
                {
                    url: '/_next/static/media/f2b0e3876f711795-s.woff2',
                    revision: '3c0391309247fc5792a32e9d59025cdb'
                },
                {
                    url: '/_next/static/media/f2b81d53dcc8a342-s.woff2',
                    revision: '37d6baa51017dde358c2caae6218a2e6'
                },
                {
                    url: '/_next/static/media/f2ccc18bac42a8aa-s.woff2',
                    revision: '4d6c2d8ee4875f1cfa893198b55af1a4'
                },
                {
                    url: '/_next/static/media/f3885cd6b7855f19-s.woff2',
                    revision: '29d937b6639419e2e3e7d1a60b1582a1'
                },
                {
                    url: '/_next/static/media/f3c9d8f9326a1ed6-s.woff2',
                    revision: '7c5c321e44d212febe5cc19925c354b8'
                },
                {
                    url: '/_next/static/media/f646136737446507-s.woff2',
                    revision: '769a3c52f7aff9a9b02b74b0f5a02efa'
                },
                {
                    url: '/_next/static/media/f6a747e87a944fde-s.woff2',
                    revision: 'dbbfaa610071d722f0f1ccdf1731528d'
                },
                {
                    url: '/_next/static/media/f75d2e2a0746afb1-s.woff2',
                    revision: 'b48e961e9e9391ddfff44ba1e219d30c'
                },
                {
                    url: '/_next/static/media/f7d61b71fd946a20-s.woff2',
                    revision: '063a1cc01c393267f20dd3be911ca528'
                },
                {
                    url: '/_next/static/media/f82c48d71abb058e-s.woff2',
                    revision: 'f44458c1b67d9d6cfb680b4f2a84b177'
                },
                {
                    url: '/_next/static/media/fa2619592b6250cb-s.woff2',
                    revision: '0b3c080ca3ccfdc1f7b5e7fd8abe65c5'
                },
                {
                    url: '/_next/static/media/fa7ac48ba9bfcd84-s.woff2',
                    revision: 'd87167c650a573c64a92aaa9fc21227a'
                },
                {
                    url: '/_next/static/media/fadedf84d5a3abda-s.woff2',
                    revision: '0429ef9d46266034c5537de05d3b82ff'
                },
                {
                    url: '/_next/static/media/fbf4122f4eb4fa62-s.woff2',
                    revision: 'b7b63732caf95e3db07ef6229ca79f5c'
                },
                {
                    url: '/_next/static/media/fc6d8b10b7b1f644-s.p.woff2',
                    revision: '60682c73a09028e3fbcf7fa3a7bb6c49'
                },
                {
                    url: '/_next/static/media/fdeb77dbe171451b-s.woff2',
                    revision: '9889e4537157e4e24670c34e593f9b7b'
                },
                {
                    url: '/_next/static/media/ffb0d388d6fb81de-s.woff2',
                    revision: 'bae9caabf5277336a7da73dbd20ebf88'
                },
                {
                    url: '/_next/static/media/ffc8a382283737b7-s.woff2',
                    revision: '9a3863e8a7c2898f3ca384e1490f0c19'
                },
                {
                    url: '/assets/icons/menu/menu-achievement.webp',
                    revision: '17e3c5dcaa4eda5bb0caf3b92c732b26'
                },
                {
                    url: '/assets/icons/menu/menu-multiplayer.webp',
                    revision: '098d5d10b006e58eda69760b55db585b'
                },
                {
                    url: '/assets/icons/menu/menu-quest.webp',
                    revision: '712990f2a3e00b63a250247fcdd14064'
                },
                {
                    url: '/assets/icons/menu/menu-singleplayer.webp',
                    revision: '09131c6cd9d6e59566d3ac175a8c1771'
                },
                {
                    url: '/assets/icons/menu/menu-store.webp',
                    revision: '1747a5894cf58c6e2cf0759b8bf6677b'
                },
                {
                    url: '/assets/icons/mode/mode-easy.webp',
                    revision: 'c04e715f8ac139d9c49960d7e8a21002'
                },
                {
                    url: '/assets/icons/mode/mode-hard.webp',
                    revision: '8e34173f669684b7b0b0be50380f3bbd'
                },
                {
                    url: '/assets/icons/mode/mode-medium.webp',
                    revision: 'd1b349a6488b3cb44fe5036c605df45b'
                },
                {
                    url: '/assets/not-found.webp',
                    revision: 'adc9d268887c39fbed6bf8d8d202cb51'
                },
                {
                    url: '/cursor/cursor-idle.webp',
                    revision: '87e8c75e051aa550ded1589abf63f3b2'
                },
                {
                    url: '/cursor/cursor-pointer.webp',
                    revision: 'bc37c69213424936cb0c483b35db2d29'
                },
                {
                    url: '/icon/icon-128x128.png',
                    revision: '689363093426de4e0ccc3944fd07f957'
                },
                {
                    url: '/icon/icon-144x144.png',
                    revision: '01fde48376bc5fe307a1891da635c7d3'
                },
                {
                    url: '/icon/icon-152x152.png',
                    revision: '4e4416e1ee973b5e843e9934d98f1d9d'
                },
                {
                    url: '/icon/icon-192x192.png',
                    revision: 'e879ede12cffc27e3678374c8a01caf3'
                },
                {
                    url: '/icon/icon-384x384.png',
                    revision: '39a0c85250fcf8478d25cede7657566b'
                },
                {
                    url: '/icon/icon-48x48.png',
                    revision: 'c2e1536d41b4b252dfb7ba094b2f2299'
                },
                {
                    url: '/icon/icon-512x512.png',
                    revision: 'cb2069589da8e70ba8280230bd59cead'
                },
                {
                    url: '/icon/icon-72x72.png',
                    revision: '8e1ba90240dc91a2c8490ba2dffc1568'
                },
                {
                    url: '/icon/icon-96x96.png',
                    revision: '513ac4258a1c884564ffd7e1fc33d624'
                },
                {
                    url: '/manifest.json',
                    revision: '5b71ed0ec50475afae10da5c314d60a1'
                },
                {
                    url: '/metadata/manifest.webp',
                    revision: 'ca6c0c150ecbc411a23f2a2c8aa2ffcc'
                },
                {
                    url: '/metadata/readme-1.webp',
                    revision: 'b0dfce79a12a13db41446d03f2e44c7b'
                },
                {
                    url: '/metadata/readme-2.webp',
                    revision: '734260c6791644ee6b48a80962c355e9'
                },
                {
                    url: '/metadata/readme-3.webp',
                    revision: 'f7dc36254b530db8152d1d2bf27fd8d5'
                },
                {
                    url: '/metadata/readme-4.webp',
                    revision: '7b73be56bc852c838fdb3aa8ea8b2be5'
                },
                {
                    url: '/metadata/readme-5.webp',
                    revision: '437b62aaaf304ab4df75d322258ff8b6'
                },
                {
                    url: '/metadata/readme-6.webp',
                    revision: '36818296db4f0dcc869ac3ad1d2f1a68'
                },
                {
                    url: '/metadata/readme-7.webp',
                    revision: 'd9a1cb73fd3625bcf20a3535425f8d88'
                },
                {
                    url: '/metadata/readme-8.webp',
                    revision: '4478f6481c42f23b21d46fa993ae6702'
                },
                {
                    url: '/metadata/readme-9.webp',
                    revision: '9cf3416f1c856105694b27b8c2053824'
                }
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({
                            request: e,
                            response: a,
                            event: f,
                            state: i
                        }) =>
                            a && 'opaqueredirect' === a.type
                                ? new Response(a.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: a.headers
                                  })
                                : a
                    }
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-data',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const a = e.pathname;
                return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
            },
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith('/api/');
            },
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 3600
                    })
                ]
            }),
            'GET'
        );
});
