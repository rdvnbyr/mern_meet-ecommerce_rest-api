ssh -t root@apps.salevali.de "cd rdvn/node-express-backend &&  git pull && npm i && pm2 restart shopapi.apps.salevali.de && echo 'Baglanti TEST' && sleep 22 && curl -Ivs https://shopapi.apps.salevali.de 2>&1 | grep '< HTTP'"