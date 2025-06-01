#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
📨 EMAIL SPOOFING SIMULATOR
---------------------------
Simulasi bagaimana header email bisa dipalsukan untuk tampak sah.
100% edukatif, tidak ada email sungguhan dikirim.
`);

rl.question('Masukkan "nama pengirim palsu": ', (nama) => {
  rl.question('Masukkan "email pengirim palsu": ', (email) => {
    rl.question('Masukkan "email penerima": ', (target) => {
      rl.question('Masukkan subject email: ', (subject) => {
        rl.question('Isi pesan: ', (pesan) => {
          console.log(`
✉️ EMAIL SPOOFED

Dari    : ${nama} <${email}>
Kepada  : ${target}
Subjek  : ${subject}

${pesan}

⚠️ Catatan:
Header email bisa dimanipulasi agar terlihat seolah-olah berasal dari alamat terpercaya. 
`);
          rl.close();
        });
      });
    });
  });
});
