persons_to_invite=['Ahmad Aslam','Shehzad Akbar','Naeem Islam']
for(let i=0;i<persons_to_invite.length;i++)
{
console.log(`Hi! ${persons_to_invite[i]} I feel pleasure to invite you to dinner at my house tommorrow at 8pm `)
}
console.log('Naeem Islam cannot come Now updated list is:')

persons_to_invite[2]='Haider Ali'


for(let i=0;i<persons_to_invite.length;i++)
{
console.log(`Hi! ${persons_to_invite[i]} I feel pleasure to invite you to dinner at my house tommorrow at 8pm `)
}

console.log('I found a bigger dinner table:')

persons_to_invite.unshift('Aslam Mehmood')//Adding person at Beginning
persons_to_invite.push('Naeem Akhtar')//Adding person at the end
let len=parseInt(persons_to_invite.length)-1
if(len%2!=0)
persons_to_invite.splice((len+1)/2,0,'Akbar Ali')//Adding person to middle of array if odd
else
persons_to_invite.splice(len/2,0,'Akbar Ali')//Adding person to middle of array if even

console.log(' Now updated list is:')

for(let i=0;i<persons_to_invite.length;i++)
{
console.log(`Hi! ${persons_to_invite[i]} I feel pleasure to invite you to dinner at my house tommorrow at 8pm `)
}