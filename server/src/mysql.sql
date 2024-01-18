create table blog(
    id bigserial primary key,
    title text not null,
    content text,
    author text
);

insert into blog(title, content, author) 
values(
    'Lorem ipsum dolor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio ipsum, eleifend et aliquam vel, gravida nec enim. Aliquam dictum pellentesque metus interdum lacinia. Quisque ultrices imperdiet nulla, eget maximus nulla pretium sed. Nam id rhoncus urna. Donec at dui sed nisl luctus ullamcorper a eget orci. Duis non fringilla augue, quis rutrum nisi. Donec justo sapien, placerat in porta eget, tincidunt sed erat. Vivamus egestas dictum finibus. Morbi suscipit auctor libero, hendrerit mattis massa tempor ut.',
    'thatchin'
);

select * from blog;


