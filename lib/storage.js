const fs=require('fs');const path=require('path');const filePath=path.join(__dirname,'..','data','latest-brief.json');
function readLatest(fallback){try{const brief=JSON.parse(fs.readFileSync(filePath,'utf8'));return brief?.stories?.length?brief:fallback}catch{return fallback}}
function writeLatest(brief){const temp=`${filePath}.tmp`;fs.writeFileSync(temp,JSON.stringify(brief,null,2));fs.renameSync(temp,filePath);return brief}
module.exports={readLatest,writeLatest,filePath};
