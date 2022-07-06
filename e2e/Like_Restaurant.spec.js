const assert = require('assert');

Feature('Like Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

const stringCondition = 'You havent added a favorite restaurant yet';

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('.text-empty');
    I.see(stringCondition, '.text-empty');
});

Scenario('liking restaurant', async ({ I }) => {
    I.see(stringCondition, '.text-empty');

    I.amOnPage('/');

    // pastikan bahwa elemen berhasil ditemukan
    I.seeElement('.click-detail');

    // menekan elemen pertama & merepresentasikan film pertama yang muncul di halaman.
    const likeRestaurant = locate('.name').first();
    const favoriteRestaurantLike = await I.grabTextFrom(likeRestaurant);
    I.click(likeRestaurant);

    // buka halaman daftar film yang disukai
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // melihat film yang telah disukai
    I.amOnPage('/#/favorite');
    I.seeElement('.click-detail');
    const likeCard = await I.grabTextFrom('.name');
    assert.strictEqual(favoriteRestaurantLike, likeCard);
});

Scenario('Unlike restaurant', async ({ I }) => {
    I.see(stringCondition, '.text-empty');

    I.amOnPage('/');

    // melihat card restaurant pertama dan klik detail
    I.seeElement('.click-detail');
    const likeRestaurants = locate('.name').first();
    const favoriteRestaurants = await I.grabTextFrom(likeRestaurants);
    I.click(likeRestaurants);

    // sukai restaurant di detail
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // kembali ke halaman favorite & membandingakan dg restaurant yg diklik
    I.amOnPage('/#/favorite');
    I.seeElement('.click-detail');
    const favoriteLikeName = await I.grabTextFrom('.name');
    assert.strictEqual(favoriteRestaurants, favoriteLikeName);

    // click card restaurant yang ada di favorite
    I.click(favoriteLikeName);

    // like restaurant yang ada di favorite
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // kembali ke halaman favorite
    I.amOnPage('/#/favorite');
    I.seeElement('#favorites');

    // cek halaman favprite dan berhasil menghapus di (unlike)
    I.see(stringCondition, '.text-empty');
});