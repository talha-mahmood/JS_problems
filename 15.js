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