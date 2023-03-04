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

console.log(`New dinner table won't arrive in time for the dinner I have space for only two guests`)
for (let i=0;i<=len -1 ;i++)
{
let removed=persons_to_invite.pop()
console.log(` Sorry ${removed} can't invite you to dinner`)

}

console.log(` ${persons_to_invite[0]+" and " + persons_to_invite[1]} you both are still invited to dinner`)
console.log(`Removing last two persons as well and printing the empty list`)
persons_to_invite.pop()
persons_to_invite.pop()
console.log(persons_to_invite)
