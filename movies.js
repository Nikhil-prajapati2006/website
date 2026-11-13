// ==========================================================================
//  movies.js — one object per movie. movie.html reads this file.
//  Open a movie with:  movie.html?id=oppenheimer
//
//  TO ADD A NEW MOVIE: copy the whole "oppenheimer: { ... }" block below,
//  paste it after it (put a comma between blocks), change the key and details.
// ==========================================================================

// ==========================================================================
//  ACTORS USED IN THE MOVIES BELOW - each photo is saved ONCE, in a variable
//  named after the actor, and the movie casts use the variable name:
//      { name: "Brad Pitt", role: "Sonny Hayes", img: bradpitt }
// ==========================================================================

// Oppenheimer
const cillianmurphy             = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSXPH44ejMI1pPD11v5UIysH4mYVqKPiDEEK2N5ZdnaTbyyC_52umo7oB0HLZ0JmOGIij_11Tr8A7OEC_CawgV-auVhIO5rQGd7pO9w55AKX9PhIxjXJR4gPGgB8NmlapfseSeF-s7vYx85&s=19";
const robertdowneyjr            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLgJOCzeHcfPDC2JUaUv0FE-Mg8xOKv05B4aY_dWrGQ&s";
const florencepugh              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgih2KoYDlN_Yr2TyiZ9ougVt60x9EQYsh_jHLvaRB5VmUks9JoUtHE3PiFGhdA6Ef3sDWgxprVGWq1qsB0-JPZ2iMSose0menY0kQThh4mQ&s=10";
const mattdamon                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYelUaIo8iB4c2n3lK23qDo5qw2TC1SQ1Hz0eFvvg6JEb7VdMGxTqlo-YHTg8d435cZl8lMG5mYv6ROtK4hxGFOeXu5i4Ygv-Ch3uyyUW8&s=10";
const emilyblunt                = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpK8RV1Uo7xMfSaXFu8SklKjMDAssMxP-tyFevw-nMAO-ywJjAPUVshFhdWMjLaciGSZIHp_lvwxn-EntJP4HEfKJlGyzp3z0f0QyLYOSxXPONBDhDlBmuo7WVPdp0VeV7eqlgp2EJLLmu&s=19";
const kennethbranagh            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh0PXq3Vb-Mjqv78vtxVzzhx0idMf0ohOelPgpX-dRIMiH_JkoYcaDQ9t1NmcnbpGGcOC1uLeSdWiiOc4JEIf-kaOOlm-NL2aJifk-LNQ&s=10";
const bennysafdie               = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTZBtdAg0MN6TO7oCn3XzA8CN68Zd9pCZFdB6S5Eqf1ogRRKrpBDK087HG5tod7Bv6Znzdkd3wBinJR0kUZFbqDNLFvYkaMbT4AdlxuW24VGQ7kFIdwhUOdwejV5EZp2_co6RLx5z01dBs&s=19";

// Wonder Woman
const galgadot                  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSz11o0xzEdNlLrCBVcaHFM2WcC5NnzmURCFztOxiTMDid66xY7L5vxXN-KXlmOlkHY-6gpwfO7D_k0sYiIHNIEBa3XjQZnu2-nXE4_zZ&s=10";
const chrispine                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3ZWebXr4cNPYHESGSn0kRkgg3W9x4PyJfmwHtNIkdg&s=10";
const connieneilsen             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvJ1KoSdbEvmsWKLugy9o-K4bugss3R4HHtQ_NLi5LOVI4j6RwpZfnGnUnxaWmpI0KGfLML_TQlormANlgBgNG13sl4OH4Pjc4vo_3h7U&s=10";
const robinwright               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH9XfZ2a4FrNGUXqUKjl7lv9BLU3HOHc_BuORS642A8gdLrfaK88gTRAM3Q-LlfwnvwNbeLJ83RRSON4TuLfU7IJlbi5T1rGunrQtGMBY&s=10";
const elenaanaya                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhe2Wt6HrV-RlFKqcOZu3qfgxXuVzU7BPbXYfOfJfs03rwfvjT38h0IS2bz-NiVLCilNwPS7ZjtR32uWDB-jW99P4QaAW--VJ4b5lGIIdkQ&s=10";
const dannyhuston               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1aUUdjzxPpTyB8wII7tRaSKu3PH9uicolLDWnjS3qOCG1PH6n218Eoo9xD5-2L6v1SmScJCzn_0adnsYOXFQrrPkWsaGRbCFYkQC-Dimww&s=10";

// Aladdin
const menamassoud               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFQCNqQtoRsuQe_OKteDdmXQrmDKFsOdpur0ycMMPPFu-vROAt3slLqmpEVxd6VI1sig6njQ0gdTdH1XfRxqpg-0U2tBiel8j7mDV4KY&s=10";
const naomiscott                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YIp1pTu4ZIk-emH87ksaifNQaspxjaXFQtJAZ6NM0wo4QJkCqO3uHuNkr92yBEwQiBycWzoIO25iY0aXKsvaLPR8JAbWEgj6g_sWxBB46w&s=10";
const willsmith                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M9nvplP7pvsoW_b0qP5grs_6ZaCthmP7268mnuHiaDOfr9jimPY-9MnUt8egZgXsizSNeSQwJWQcmqw3Gn2R-u4vNhgVNY8qvnCbJYpXcg&s=10";
const marwankenzari             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEqkcomuxfa3Uf5xWHv0Ei0j-sQGRqrnEFMrYokEHamwb8EjHvw5_Tw1ArtufpB28C-SFZ8eU6Syo_Z-84kXgTITF_MxECOTjvNa2HmL0&s=10";
const navidnegahban             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_h2vRqnb5LOdqddotbDnmqzkzCSTIg5AAGTCFo_TyUqwh_Zw2ZP0WwYQdewDJrU0bBfaI4q6DxzsmqcBwck5bmpZDizv5MA_aqFH9zzsWA&s=10";
const nasimpedrad               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvRdsb-1461lnmy8OpRTO4YxdsCnePjfQ8lB5g_KFrzYx5HlirH31MK_5YYEjKreEOPzO2RE5XseIKNm_LT33378wShG0Qz_Bh4EBkQX_6A&s=10";
const billymagnussen            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNZjsUKA41PanntKpunnDoAa8fBBDxT4ipJNJOJ4B2CVI7Vu2LBH8i6HIyNiTkdUGi18elrYKTulItUhHDghZ07GC1uVE14vLGUtgDci7vQ&s=10";

// Cars 3
const owenwilson                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGg69Bu0Ed93_LIiJ2lKc6I1Rjd0AsTtm9iXnVOQ5ZsEqNZVdHjJNo7OBMXSeCC3RyVb_olNTK6z9qiwIsEWGpF-Pd5fqo7gpv3iyJw-zVA&s=10";
const larrythecableguy          = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgr_s2cwmk68HjeDrfPE-pLWgw9UW4ySu0glNvjWcVdqVTftL2CmoxkPUQe5QUSaCWSspxzBGzkrtjIe8S-TskscpH_vJgrxEdSjzLCA9X&s=10";

// Cars
const paulnewman                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqr08m8mO7ObnUqepqQOtdQo8SckqIFakXAQMjr2wHfxl2y5uXcg8Z1IsnYvALZvAl_EPJ3vLH9jXKsvPx7OoOVrZfLkdWZEgjALlLEuI&s=10";
const bonniehunt                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCbxFTxjAW9ovqIXZhz9j66QCRPnwIw6yEMZizjQq1w3GA2oVvyi3z0bPWFFc0D3nB9jVJLnIorEXm6RnwCUxlTBLJXtepVqKW4mR4eJF&s=10";
const tonyshalhoub              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxV39PtBUdsxeoSBI51M7R6hyz2g0l1ym4tWRQqU-FUVccDSTQg6qiNNrgvh2FFkqVpliQWoLQPsG_M_Ykyx16nstljuI5SsgLYuYE6Dj7cg&s=10";
const cheechmarin               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWP9GwXC3EwXBTQy6M3C3c3AdvwW1PtGuoSYJFiXXlp8shxD20IdsHW9AI2tRC_52Us3kpkZxZdWKYagsEsfK7ZI68zKugJhCTwNC8b0SXbw&s=10";
const michaelkeaton             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ywcu0qj3mUbGg8CKeiSR5E6cLq6mmaj1FfVMX-w0HNPkhbe3hm5VjQNcQQD8wgeBUVP_j7JUurvzDHM1u6Gq-uNY3amubNYVouA_O6Y5NQ&s=10";
const georgecarlin              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzQlLyMKU9Y5m2ZmKDvnLaqQSpfxt0jGWcQHydfBsig&s";

// F1
const bradpitt                  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a8zxjEUs96kknpM5oj5pWx2hgDRHdGlbUc-0c485Xg&s";
const damsonidris               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL-EsZmNg9NQeOw1ZJK0XV6yGJLQQOa-DxXyhaOXNOcO_hhVe0FSNIWxfm4vGs_VWauQDGVc3n1Yyql5SONofl6ScsowAolXrxrDRVaFZ&s=10";
const javierbardem              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJb85TUNJyVVYvGlY0YRd3f9fWW_ssRuxINs6v3f_wYQ&s=10";
const kerrycondon               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58VmmA-iPVdnigtnveSkaGFwM-wC4CL-ErpDT0UQK3V7KqJp7uEaJhr2N6yLLAz6vwJyfkFiVtxQ_-D3xiG2hG8f_6sVM565yPi3Y6lWIGw&s=10";
const tobiasmenzies             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkHYKHJw-01vJrrai142GYmU44lN8rbp1kTa6txPEOBVzGC7TdbuaYodrH-PRhexVx7Hsj7Dd3p7ACa9Yx1_uZ8KlUUtUh2CJf-atIfK_Fw&s=10";
const kimbodnia                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEjNCHjmAfovhU94bKjp8ymj8W_JaxZ9SpsH8tYfyxA&s=10";

// The Fall Guy
const emilyblunt2               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRodv0ZEtXTP15vGk1Cmpz7qBLaii8LMGdoLAIw5iIkQ&s=10";
const aarontaylorjohnson        = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fYz1ORQ8enh-yM9HJAGHynFFk6aQXgHDpnbuRu4gCGar49eb6WQdyrb0RE3_XKGMuUcpD5y_3PxltNiDdyjsXNBhG3bUUE4TuLO6rrL-0Q&s=10";
const hannahwaddingham          = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvxq1HtwHHgVQTXSSBM4-3DXAziTu_7JLTLL3hP0nCeaWUgW2frhk_jTTmMGIYueVN-ANHQG4KXjoWiMepc51R0LWU8Sbzp5mP6KWAJeO8A&s=10";
const winstonduke               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKz3QbLiG948pJa4W2n7ovlOr518laNTsti3xLlue3HtwXOd8uH25PoAoVi_a192OLYIclufc46uubRLyJLYRf55dpylU1qjR72mXoa7Z-Q&s=10";
const teresapalmer              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1iPeXRKv6d6VwkLbIuYDyDzPL_hEvk43U6KIeGCsIXytb3XoYFXiPjHcELXbsJj_90nl48nC0KLHL0nNo7KCTx3pMymWjgKqL0jWF9Ia&s=10";
const stephaniehsu              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtbZMxfxC0dMQK1XpM7AFmeLMhoUQi-3NwU6sQjwfyZMuHmr-uCHk3zD1dJ0r2D1Oknb09071guYZuAohpdeZxsI6AWZbjYxNPhoRjI3S&s=10";

// Damsel
const milliebobbybrown          = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI6mkohJwBlQ1EughjfiAwHhCvkEp9ZobaWGb9yZ_P3WTdwoq1AFO1_1HXnLjgjLc5wFyAXr9ruMUmAcychjOYtsc-lEsnR1YPHSUSzMpwQ&s=10";
const raywinstone               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6NT1eUqoLKrV5hW_1j1aXfu-aNWopCCrmGYXp2ArNsfSr4QCBPZzdNjVkQkR5CUunTzGzWe1izt5KmATySvjJAR5HD2X1xy--CFqXcSJ&s=10";
const angelabassett             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuU1lgqIg3yvE3spQAryFBHzHphghZa34XlYShlVQaB_-M2twqOyWmi-XFa8FQjztFO5whQgIwWqTIL6lLaDtEkRvjvj3sHdJ2pPPJ9CC5zg&s=10";
const nickrobinson              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_cCrxG4G-xzcPG3J1KAgWIV1qllnaBWiQJtMFmfWvXAuoIBTpPSeaY02gqFd-Jhq5rYllNy8kBI-fNTMU1uiKih6slT4qrJpc-gx8xM5_Q&s=10";
const brookecarter              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif2cOAsMtoiXBb-wrK_hcqlZ2yBovs1EHUp4-H-mlA2d3pB6qwwMgjW3Gg977DntTCdCxcyYlDliAYk2GhCkdTTkUzjYZsM2PSjspllVysw&s=10";
const shohrehaghdashloo         = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVhZ0B0wcfqqSBJVBKyAgFFnrE_zguzQhvHzNaqJACdp8stRoGEHZjItKojWTc2H7ax0Y3bAue3IALCFouPFh3FLyXr2GxqA5OMlotVED&s=10";

// Interstellar
const matthewmcconaughey        = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTRRWHwPjxdwo4rJ6-7lx78mocgOwo9lxlnG1ybqeCUYu_mLxjiwuysZZfYERoueXWZISsgWlmZykecSRCjho_fCvEnkZ6hXTRP140OLx&s=10";
const annehathaway              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eh2iC_7REsAHLGfZpukNhBiqcJ2B9t-wrg7FRIM5o2bXtjtGv0onxSd75qmeOIl-Gf1q_x_QBIPnEkyOZEYavBnEGiG2cjZgeIm24A&s=10";
const jessicachastain           = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_btlBQlbAbi0eyXat6dtikIp2Z5v7_h5Pkz81-OmSlucWhjqfLoHuryyOim9yiRoge-GWJUDCNMfMh4JSsBtwZ_Aut0vXIfjCKUDsyKfhw&s=10";
const michaelcaine              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2tOCeAIMaHBz3rilOHEWHq1Ou-C8enXuuZTSDyx03Q&s=10";
const caseyaffleck              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0j7nXs_R929zbciXOIhF73dleltLbzFZIld5K9AJrI_4jDEaXY7XIskXslRsQFEpqpHh0Rhib1IZZttbbd2RBd8hDn-kRzd63ceO2drC&s=10";
const mackenziefoy              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKe0W-VoIwvahvrwjV3bJWIB_UXhC2SRl13RkTcv2cRWLcVvvdDQFEvK-1J52PTd6YP00WN7CwrPSTG6TObTLSjuf8O4Usin4TNQvr79c&s=10";
const mattdamon2                = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTZAlFJM70nVGSs_vNC9kOLBTOJqcew8czUUI3uoBMrw65ALyiz6J98KC4L6PD_J2imKGzb3FterF75kqySF3Dtr2ROfr6ZxfUTMURllTTpEnRjJQ1M52NnNPaYvm3L0L34-Fw-tai9kzg&s=19";

// Deadpool
const ryanreynolds              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJIXVPHGGYwmZrqIJqTdpYDjGGA8KMZb2WR6jied9bpv3ll7fCpAmyb33BL_CRBUgICpW6JbhD0Me2y0DoVAkb2dp4xpuXJBPO8qP2AYW&s=10";
const morenabaccarin            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzJrsvCHhoq48zqknRBxssjjxi4LSCn1u5vHxkPvlTwlXkvhRpKLvBGCK4t34ZD6J2OCRwq9Ny4P8a7Z69NsOVod5_HUlURQjOGp0syLitA&s=10";
const tjmiller                  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOgUK0olTxltjMKrmUjsD8a0ZxYhaRaj9QgttoR-qpA&s=10";
const edskrein                  = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHYMxXKZQ3nLNYjXXZVpV8cS0ydgSFn3YMQnyOtTip15YzieRlMbWZMfALYwdx8sGOMC9vHZFYc_wKw-Z7EOy2YLEqDV6vyT5ofOqga9VWTsn-1fHSTr0a4Nkmnucmd9BhC3nXeXEJJ20&s=19";
const ginacarano                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-Dp8zbeCGbG-2vSrdkL6LH_AMsvi7bC4IiWJHhi1aSN7GbnLh03fJnXsNQVTJQi1xan81g0VVYybR-hce8AoEuVuPvUwotWwlZ_Y-4EG&s=10";
const briannahildebrand         = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu73Fw_STEU1f1REvOA77pICQzEZhO_XBxAkxxAFsvPAZte1OgeGHkTLd-yRRjQluH1720ytUarkm-qsXTPtD8fCf0Xs3Zd7rLVLqP-vxtug&s=10";
const stefankapicic             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAfrASTQ-atjOCBBxM8IBA7SiwomKRdoozxdACdiCvw&s=10";

// Deadpool 2
const joshbrolin                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CpJ4uaToE9Bt19EaQ3cNymzKIIX-merrd-QKRrbQFR8a6N3BfwMAMPvVc7Mxw2__jgFHuilPyK0inAdpQXLvDQQWGt6kjN5HwCDAgOFn&s=10";
const zaziebeetz                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_4rTxwPucDjD3Mjmiddj52coam6JIoCqvA_3WyKGrQ&s=10";
const robdelaney                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjZxg26B9ljjSrYs6dqq2DnZrp10QW4yXDWsnytgIlMNnVEQPFN59MFcI5ET0E3Jwi0yg4MoEyRi7lgKlSA1bXpYZXtKl00Zbepf53iT0cA&s=10";
const juliandennison            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_SnSRSZhBLsaOS7xGtdQGVcO5pZx9gsE7yHILU3mDEaiKMwVY7sEuTz4FKkYBa6hbCUcHAZJADP6_0hac2LufdYcNtesplDb2Clmb3eCSA&s=10";

// Deadpool & Wolverine
const hughjackman               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiLigv7Wg4SfBQFiSRsgLrdPx0JEyHG-_6IaG-HUCoSDzk_6rrbXKIL5TDHhhXwnisqV7qWHYToVgfOPsuxLobRvSGL7SrChGoIONXTXdjw&s=10";
const emmacorrin                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgItf_iLNlygn6d-tLxXahT9LWwHFukcUN985diP5_YtM7eNyPgCbZ9AymR58_uy_fETk2BwtfrL-Wefm49iDO_hOlbojxrUE4zlvg4i8C&s=10";
const matthewmacfadyen          = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHcH81gAB0d2dVStLtaQTsR5QSaqZWwD1-IoUt2sL1_QLCSLlXfjcyVea2nUSz62cZlqUUHPSflvnSqdWMTSeve4v8JVHuDewr6JPKHrHqQ&s=10";
const leslieuggams              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCnAz5nOkaysYPZrc2BbRUFErlYUu_ev3vZBUlg2mpk8Fvd75S9PSZKJuAk_uyvT2ra0bIRiafH2tjTlozuLQ8eArDieSb7kZdkjxB4tyvg&s=10";
const dafnekeen                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1iDEVmc97AoR1J-SRUUyQjhB-eBMCF3PJeESI0DCQ5qAKPKi_UYDQisEOLpkl8dKrlEuYXSPrH899XH97A0idubxov1AHPinSr-UjWAIWA&s=10";
const channingtatum             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5ciWxCA_XO7kkxi6b08gK5qX4pVkBAjVnAFHMb_HFqkWonB4S62LISZ4xyVpt4dt6CzGOw_bTenIo49DTRvnSMM1pszjL5Qh7hbqyVWV&s=10";
const chrisevans                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1S6m6rCrnI6oISns4ro_YJes4Pp4bNWu5-cPse1xAlpqOZlM89hWvzXMfAyYO7cTGK5bJR4fJGB8uKPaNnq-ZwNfuuB5lmGftut55Ifm&s=10";

// Ford vs Ferrari
const mattdamon3                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KG64YyhX0zRvUseQIscC7D9-qoiQtFykSjDbpjll8g&s=10";
const christianbale             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYRyraxhq8VPu8g06g8BBj5IUd84enC9w-B6rdcr7KA&s=10";
const jonbernthal               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrg-3rFBb5sf7CRzcIOgc6I9IiRTsMmvG4L4kIjR7P0kb6FqlsWG1rbWvJcd8lOM9131usw5OxcRd8kFZFrnbQ-he90jjTYA5bacL5fVa8&s=10";
const caitrionabalfe            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigsRMGa-l2I4LiaFOlEB_6VEigsh9SLy2ijsPBjjJ5AJeNupenjVzqigTRt31oHdUO-VX_dqsazfy30GrIQ_DBwkj7fiCutSaNtUZXBd9GA&s=10";
const joshlucas                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4gXzN4-WPQzk0ATKtCMXjQUt6vYXzZ5YrWhJ1gTP8I1R8q8aLtymlFoamIoqtbOTvFCVXADFPfHwg_A7AhZwGa4z_e44CAad9Q-zrckR&s=10";
const noahjupe                  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2sl2TI4ukDt1sahMsfXC8CUVuLKTdnCuWKLw3R_dxw&s=10";
const tracyletts                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLT4SZWThq9lqgPD2I7275ovgGvWSykAX4Kr7CF0Z8GMbxNeSfmQgwXHdX6g6govjUfaTXZPlHTVJFNNptOzw2dNO-hS0vWtP5dXHQQou&s=10";
const remogirone                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIqVIwJ5xVZlQm8qLVyKcPLDKTRq58CgumJMgfg_IMznYJv5hHLv5cKj_Ddy89KHc67YoLC_mOluJRERJH0tKchw8IEkOah8HLw-Ref3u8A&s=10";

// Shazam!
const zacharylevi               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvEdkNOfmrX-aio7AggN4GAhVXTLohJE79oHr3OoOsnGjhVuS0UgzSdWx4jUKRr_kysWXLEhsZ7B-MaVw-C6b0tPgyn1fdswYT6dP7Tgcjw&s=10";
const asherangel                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3NejLNnNPCUPFQvDYsch1g25ME2bwcNYOvtA3Xjyn_FhHvPPLhpn8JxuTQPQwhshurdahX0xokJZVacv8_TFD-IPq2xSRTBoE-cZ7Gly&s=10";
const markstrong                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzKEPxB4tTp-ikS8sAAfUc5EFT3f-OX1tCVCd_bdZ7EKbSbSmJyrmVdWO50T-cKsjBZV1OxoItZx2xu6JoGB6loyw5rpDqW5bazAB3S6T4Q&s=10";
const jackdylangrazer           = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06uqtN44CVBbOcbOznBrm-1vWveILX21ms_5tXK8u-aKa-v4pm861Yu85eaqIvWePU8XJubaeksVQ168vS596wf1nezX0QLODgcwnENSv&s=10";
const djimonhounsou             = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh_kkUbk_BRz5TpT69J2HYsboHJ-NwQa91XRKBMwu3deO4RS-g8rmmbjjajyl_bfhGCz6i1na2tNl-AWhWC21DTmRw8H2LeEftkrlqjyygw&s=10";
const gracefulton               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGZOPhFgwRfmJvcXXdTl8bj9YGHSECZTW2ryBmEcDp9OGWJEuUqS5Kh4K8gJuFMyn49x7wcUC25IU0ErvACT_xaml41LtVjdvsos4VoJTCg&s=10";
const faitheherman              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_rXgJKMwTrlEv8iEQslb_-q3baX_B0Pq_m-GacD7E17-33gCGlXUZtxZ5ZrNzkr7G3s4CraJnG7ls6ZvQEL7XbpSOi0FpWKFRSh4yz-5&s=10";
const ianchen                   = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivrQLil8xNoBoCEeNLhZiKS-7m5ajRLvOhNEJ0LCckW_-9J0ty2fETxh7ZDqY58q-wcK9Q3lOjbBqSWLq7o7QzIT1e8JcihVhbB7RlCkk&s=10";

// Blade Runner 2049
const ryangosling            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmvk4E_jctv3kRmf6nDeFXuH6qZa7Idpwq4EnrmJehcElALiuF8DAcLnYmIRz6ZsKBuO2-W6duHjMao-wYlQHKizM5N_Nb9axQiisZZD7&s=10";
const harrisonford              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGv-h4K-IjyDrkMa350TL4y9dhaN6Vpk9Vq-SRLK0gWl0lpZXKjvde4wQVyi1L06gJWPkflMIKJ-IX-2zpywhQ-T2GFwihdDx1PUhVNcm2&s=10";
const anadearmas                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFJNVvEBVKInQKk01dXmBfBBKineRKX7YY-_5XtQ2ug&s=10";
const jaredleto                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG9Swjyp5zIQxmANJyIlD1kymf5hH9UHFRQo6w0RAM8g6gOY1KH9GT3csZZ1JJodvayEf_fXlFa_-UudvuN4G2fbnGJQRqYc_GdGFXbYe&s=10";
const sylviahoeks               = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQl6uBVqs3XAYUd3vWIjI8yN6sqOkty8utcQSBdnoNBEbIrAXmyCYfo7voo_S1YJJN2v0V5GozLuIFTpK-bFdok33kkOMqIJJmOhGi-aFjwVKIAdZqoKdrEhOqadu7atPLM0rBLxb3GUes&s=19";
const mackenziedavis            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxw-X18EroCBAY7gFU4edwtOIz3OeSoojjrbWoN5lqBIlDaZB_IMvblVhtHbu3xoLqK5bGuh-uVxgjbAKvvwekCyzvRZALvvoMqGxzCDcgw&s=10";
const davebautista              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NhniqOrt2pbFQMkfahhJOINXkMPSbhRagV95zjqpNWpuqhLNZgdtEVEGUCb0_gxarG_XpnoY8UQ7UWbF8PzXi2ISqIIzrdg1XVnPzRJI&s=10";

// Top Gun: Maverick
const tomcruise                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3qZffDdt7j9l4Hgjkdhd375Hip5j30duYV4JZmR2kw&s";
const milesteller               = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90qW66uh3J5FnCpIZrFTIOt1p1J_XZCCLTDpqUNl-uNxi7qdRKFbsyQNVNPdhw4lIYxX60Nsso8kA3JQmgBI1WhlM5rcGmFeYgvFzXakIKw&s=10";
const jenniferconnelly          = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS_dRFLbqVtMlr3Gq-Qrkw8ywmPgulckRmpG0Mz0u_lEd9BJTQZMH_h3ITDPgGpD7VznOyPh6f0o8gr7snRrx259p8aTEPkf6cwxiHRilQuXmUxpHyoo4RTjzVY5Ng__IKzjGM4AiN9ZE1w&s=19";
const jonhamm                   = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl686SsrT_LwCmCdUXwvEuq6tv-uUI3mPy5mQp4AkGXGVNuqcJugBJVpLeE7FHDRn7gtX0GQioJr1c2SqVDtj4NeiboreHrvmu219z1uLTGw&s=10";
const glenpowell                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOz-18zcERifLBC668NJB38brrfppUmeyg5MGE0g3jdnPcr0fORm5HLC2rvgFWXtBDv4JBs0An0nz5BKnTDqiVFhIBU5BbOlldQwa_gjO&s=10";
const monicabarbaro             = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQV7kVVFDStGGUI4wpl35CrbFYFq3KDN_NJSruztTSLWCXjM1fnfMHFdsChUeTIgMpldsL94QGFJ9sL50q39Aw6P333bcje7lvR1jEdMAOzJ6WGNozjF265rxs3IoMpk-RxTcAx9QOtybW5&s=19";
const lewispullman              = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBt8698VqBy_N0dfxuJkMnUKHcp4mxtBpCVa7qEsy8JnZHyShIMn-o7KzJcKcTfdIxvOclDIU2_KPbDT_S0bf2aG3TppKhDOjEFSyZPFtH&s=10";
const edharris                  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B7huf3HvcYrX2b-_2NsLgqUXUvYY0Zo5_NgVw_7W1Z-xmoox7AlOdNea110Pi9rFQmnl19uN7VVvRs1UM5VIxnPOLOs8HVClJFHd1COf&s=10";

// Masters of the Universe
const nicholasgalitzine         = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGSUYRaEQGBBoSk-mtIR9hqiKlwY_5WvzQyv2oUz_rw&s=10";
const camilamendes              = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTExVMYs3uni0D9OXJ7gOdpjOGybwTibRblUDO5NVT_Y73EMg750R-9cQXBbpEMW9ZuYuZ78yfJ_fPngU1kqaOflx0P3S-TCsdBtXRbRTupoDiE3TjsZEwItn9oIsTirZqwq-vvhbF9cSA&s=19";
const idriselba                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSiIIJ7pW8A5khjfKwkvHmJqoRgenKtRXUZalVt43mlSp7DvEgzUEqDQSFXZgP5aRkKNdSvr1zzmcBHs9tyBTqza3FVBLmh7Q0oBs1gHltQ&s=10";
const jaredleto2                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCtC7NhyJvtojssIVHnf_lnPuobWjTQNi_z-cQueFNqFgm6DGXP16Rn_xO-UyF9lawFFqXUICPoBeL3SgLasgn6ZQ18WaB65ITMX7_UFc&s=10";
const alisonbrie                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGm6yAC5A2_ErEbroJjyiUfMN7ARw_LO6mCqBuXqxnhBh5L8inbKHUb3XTL_6_LbTiubGLGEOT4nqmozOdwg6qmHw536FJuSo2sSZO4U_Cjw&s=10";
const samcwilson                = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEpTjeqnwvmqAmOl2s24d5EHDfoLh-UhrZTaXu-X3ys_SG3AMRLUfLE3JV94ZcEUefoLKWj9rk3tcwm2Jm_dA7Z6W66hmvNRKOBhlf7r5&s=10";
const johanneshaukurjohannesson = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04Wa4ulpbxn5LgQBmZEpiMCdcJD176kEai_MTpPEDEMCRsjZvG1Ns3EBZlRYQb6rkt5Ra5olzsB89iH9VhUipip35E8T_azdXWS8f3OLe&s=10";
const kojoattah                 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xWDK0kCCxPWRsoKyro8VgZc8uG7IUCmP8Hb9LVp0X6wWOUw8j2NN71JMYHDonlwmwe59tZmiEdgPkNzr_pMQP252dL6j9yU7NC8n77pd&s=10";

// ==========================================================================
//  MORE HOLLYWOOD ACTORS - paste the photo link between the quotes.
//  Then use it in a movie cast:  { name: "Leonardo DiCaprio", role: "Dom Cobb", img: leonardodicaprio }
// ==========================================================================

const leonardodicaprio     = "https://tse1.mm.bing.net/th?q=Leonardo+DiCaprio+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const johnnydepp           = "https://tse1.mm.bing.net/th?q=Johnny+Depp+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const chrishemsworth       = "https://tse1.mm.bing.net/th?q=Chris+Hemsworth+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const chrispratt           = "https://tse1.mm.bing.net/th?q=Chris+Pratt+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const markruffalo          = "https://tse1.mm.bing.net/th?q=Mark+Ruffalo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const scarlettjohansson    = "https://tse1.mm.bing.net/th?q=Scarlett+Johansson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeremyrenner         = "https://tse1.mm.bing.net/th?q=Jeremy+Renner+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const samuelljackson       = "https://tse1.mm.bing.net/th?q=Samuel+L+Jackson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tomhiddleston        = "https://tse1.mm.bing.net/th?q=Tom+Hiddleston+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const benedictcumberbatch  = "https://tse1.mm.bing.net/th?q=Benedict+Cumberbatch+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tomholland           = "https://tse1.mm.bing.net/th?q=Tom+Holland+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const paulrudd             = "https://tse1.mm.bing.net/th?q=Paul+Rudd+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dwaynejohnson        = "https://tse1.mm.bing.net/th?q=Dwayne+Johnson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const vindiesel            = "https://tse1.mm.bing.net/th?q=Vin+Diesel+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jasonstatham         = "https://tse1.mm.bing.net/th?q=Jason+Statham+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const keanureeves          = "https://tse1.mm.bing.net/th?q=Keanu+Reeves+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const denzelwashington     = "https://tse1.mm.bing.net/th?q=Denzel+Washington+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const morganfreeman        = "https://tse1.mm.bing.net/th?q=Morgan+Freeman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tomhanks             = "https://tse1.mm.bing.net/th?q=Tom+Hanks+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const arnoldschwarzenegger = "https://tse1.mm.bing.net/th?q=Arnold+Schwarzenegger+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sylvesterstallone    = "https://tse1.mm.bing.net/th?q=Sylvester+Stallone+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brucewillis          = "https://tse1.mm.bing.net/th?q=Bruce+Willis+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const melgibson            = "https://tse1.mm.bing.net/th?q=Mel+Gibson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const clinteastwood        = "https://tse1.mm.bing.net/th?q=Clint+Eastwood+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const alpacino             = "https://tse1.mm.bing.net/th?q=Al+Pacino+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const robertdeniro         = "https://tse1.mm.bing.net/th?q=Robert+De+Niro+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jacknicholson        = "https://tse1.mm.bing.net/th?q=Jack+Nicholson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const anthonyhopkins       = "https://tse1.mm.bing.net/th?q=Anthony+Hopkins+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jakegyllenhaal       = "https://tse1.mm.bing.net/th?q=Jake+Gyllenhaal+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const joaquinphoenix       = "https://tse1.mm.bing.net/th?q=Joaquin+Phoenix+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const danielcraig          = "https://tse1.mm.bing.net/th?q=Daniel+Craig+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const henrycavill          = "https://tse1.mm.bing.net/th?q=Henry+Cavill+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const benaffleck           = "https://tse1.mm.bing.net/th?q=Ben+Affleck+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const georgeclooney        = "https://tse1.mm.bing.net/th?q=George+Clooney+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const markwahlberg         = "https://tse1.mm.bing.net/th?q=Mark+Wahlberg+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const zacefron             = "https://tse1.mm.bing.net/th?q=Zac+Efron+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const timotheechalamet     = "https://tse1.mm.bing.net/th?q=Timothee+Chalamet+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const robertpattinson      = "https://tse1.mm.bing.net/th?q=Robert+Pattinson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const danielradcliffe      = "https://tse1.mm.bing.net/th?q=Daniel+Radcliffe+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const eddieredmayne        = "https://tse1.mm.bing.net/th?q=Eddie+Redmayne+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const andrewgarfield       = "https://tse1.mm.bing.net/th?q=Andrew+Garfield+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tobeymaguire         = "https://tse1.mm.bing.net/th?q=Tobey+Maguire+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michaelfassbender    = "https://tse1.mm.bing.net/th?q=Michael+Fassbender+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamesmcavoy          = "https://tse1.mm.bing.net/th?q=James+McAvoy+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamiefoxx            = "https://tse1.mm.bing.net/th?q=Jamie+Foxx+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const eddiemurphy          = "https://tse1.mm.bing.net/th?q=Eddie+Murphy+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kevinhart            = "https://tse1.mm.bing.net/th?q=Kevin+Hart+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jimcarrey            = "https://tse1.mm.bing.net/th?q=Jim+Carrey+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const adamsandler          = "https://tse1.mm.bing.net/th?q=Adam+Sandler+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const benstiller           = "https://tse1.mm.bing.net/th?q=Ben+Stiller+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const stevecarell          = "https://tse1.mm.bing.net/th?q=Steve+Carell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const willferrell          = "https://tse1.mm.bing.net/th?q=Will+Ferrell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jonahhill            = "https://tse1.mm.bing.net/th?q=Jonah+Hill+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sethrogen            = "https://tse1.mm.bing.net/th?q=Seth+Rogen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const bradleycooper        = "https://tse1.mm.bing.net/th?q=Bradley+Cooper+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ethanhawke           = "https://tse1.mm.bing.net/th?q=Ethan+Hawke+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const russellcrowe         = "https://tse1.mm.bing.net/th?q=Russell+Crowe+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const liamneeson           = "https://tse1.mm.bing.net/th?q=Liam+Neeson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const gerardbutler         = "https://tse1.mm.bing.net/th?q=Gerard+Butler+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const orlandobloom         = "https://tse1.mm.bing.net/th?q=Orlando+Bloom+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const viggomortensen       = "https://tse1.mm.bing.net/th?q=Viggo+Mortensen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ianmckellen          = "https://tse1.mm.bing.net/th?q=Ian+McKellen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const patrickstewart       = "https://tse1.mm.bing.net/th?q=Patrick+Stewart+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const samueljackson        = "https://tse1.mm.bing.net/th?q=Samuel+Jackson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const judelaw              = "https://tse1.mm.bing.net/th?q=Jude+Law+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const colinfarrell         = "https://tse1.mm.bing.net/th?q=Colin+Farrell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tomhardy             = "https://tse1.mm.bing.net/th?q=Tom+Hardy+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const devpatel             = "https://tse1.mm.bing.net/th?q=Dev+Patel+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const oscarisaac           = "https://tse1.mm.bing.net/th?q=Oscar+Isaac+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const pedropascal          = "https://tse1.mm.bing.net/th?q=Pedro+Pascal+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jasonmomoa           = "https://tse1.mm.bing.net/th?q=Jason+Momoa+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const johncena             = "https://tse1.mm.bing.net/th?q=John+Cena+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kevincostner         = "https://tse1.mm.bing.net/th?q=Kevin+Costner+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const nicolascage          = "https://tse1.mm.bing.net/th?q=Nicolas+Cage+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const johntravolta         = "https://tse1.mm.bing.net/th?q=John+Travolta+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michaeldouglas       = "https://tse1.mm.bing.net/th?q=Michael+Douglas+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dustinhoffman        = "https://tse1.mm.bing.net/th?q=Dustin+Hoffman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const robinwilliams        = "https://tse1.mm.bing.net/th?q=Robin+Williams+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const billmurray           = "https://tse1.mm.bing.net/th?q=Bill+Murray+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dannydevito          = "https://tse1.mm.bing.net/th?q=Danny+DeVito+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const stevemartin          = "https://tse1.mm.bing.net/th?q=Steve+Martin+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeffgoldblum         = "https://tse1.mm.bing.net/th?q=Jeff+Goldblum+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const samneill             = "https://tse1.mm.bing.net/th?q=Sam+Neill+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const willemdafoe           = "https://tse1.mm.bing.net/th?q=Willem+Dafoe+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const woodyharrelson       = "https://tse1.mm.bing.net/th?q=Woody+Harrelson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const antoniobanderas      = "https://tse1.mm.bing.net/th?q=Antonio+Banderas+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const beniciodeltoro       = "https://tse1.mm.bing.net/th?q=Benicio+Del+Toro+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeffreydeanmorgan    = "https://tse1.mm.bing.net/th?q=Jeffrey+Dean+Morgan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const anyataylorjoy        = "https://tse1.mm.bing.net/th?q=Anya+Taylor+Joy+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const margotrobbie         = "https://tse1.mm.bing.net/th?q=Margot+Robbie+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const emmastone            = "https://tse1.mm.bing.net/th?q=Emma+Stone+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const emmawatson           = "https://tse1.mm.bing.net/th?q=Emma+Watson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jenniferlawrence     = "https://tse1.mm.bing.net/th?q=Jennifer+Lawrence+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const natalieportman       = "https://tse1.mm.bing.net/th?q=Natalie+Portman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const angelinajolie        = "https://tse1.mm.bing.net/th?q=Angelina+Jolie+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const charlizetheron       = "https://tse1.mm.bing.net/th?q=Charlize+Theron+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const nicolekidman         = "https://tse1.mm.bing.net/th?q=Nicole+Kidman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const juliaroberts         = "https://tse1.mm.bing.net/th?q=Julia+Roberts+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sandrabullock        = "https://tse1.mm.bing.net/th?q=Sandra+Bullock+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const merylstreep          = "https://tse1.mm.bing.net/th?q=Meryl+Streep+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const cateblanchett        = "https://tse1.mm.bing.net/th?q=Cate+Blanchett+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const katewinslet          = "https://tse1.mm.bing.net/th?q=Kate+Winslet+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const zendaya              = "https://tse1.mm.bing.net/th?q=Zendaya+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brielarson           = "https://tse1.mm.bing.net/th?q=Brie+Larson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const elizabetholsen       = "https://tse1.mm.bing.net/th?q=Elizabeth+Olsen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const zoesaldana           = "https://tse1.mm.bing.net/th?q=Zoe+Saldana+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const halleberry           = "https://tse1.mm.bing.net/th?q=Halle+Berry+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jessicaalba          = "https://tse1.mm.bing.net/th?q=Jessica+Alba+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const meganfox             = "https://tse1.mm.bing.net/th?q=Megan+Fox+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const amyadams             = "https://tse1.mm.bing.net/th?q=Amy+Adams+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const reesewitherspoon     = "https://tse1.mm.bing.net/th?q=Reese+Witherspoon+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jenniferaniston      = "https://tse1.mm.bing.net/th?q=Jennifer+Aniston+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jenniferlopez        = "https://tse1.mm.bing.net/th?q=Jennifer+Lopez+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const salmahayek           = "https://tse1.mm.bing.net/th?q=Salma+Hayek+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const evagreen             = "https://tse1.mm.bing.net/th?q=Eva+Green+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rachelmcadams        = "https://tse1.mm.bing.net/th?q=Rachel+McAdams+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const keiraknightley       = "https://tse1.mm.bing.net/th?q=Keira+Knightley+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const saoirseronan         = "https://tse1.mm.bing.net/th?q=Saoirse+Ronan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sydneysweeney        = "https://tse1.mm.bing.net/th?q=Sydney+Sweeney+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jennaortega          = "https://tse1.mm.bing.net/th?q=Jenna+Ortega+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lupitanyongo         = "https://tse1.mm.bing.net/th?q=Lupita+Nyongo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const violadavis           = "https://tse1.mm.bing.net/th?q=Viola+Davis+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const octaviaspencer       = "https://tse1.mm.bing.net/th?q=Octavia+Spencer+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const gwynethpaltrow       = "https://tse1.mm.bing.net/th?q=Gwyneth+Paltrow+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kristenstewart       = "https://tse1.mm.bing.net/th?q=Kristen+Stewart+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const milakunis            = "https://tse1.mm.bing.net/th?q=Mila+Kunis+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const oliviawilde          = "https://tse1.mm.bing.net/th?q=Olivia+Wilde+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sigourneyweaver      = "https://tse1.mm.bing.net/th?q=Sigourney+Weaver+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lindahamilton        = "https://tse1.mm.bing.net/th?q=Linda+Hamilton+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const millajovovich        = "https://tse1.mm.bing.net/th?q=Milla+Jovovich+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michellerodriguez    = "https://tse1.mm.bing.net/th?q=Michelle+Rodriguez+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const karengillan          = "https://tse1.mm.bing.net/th?q=Karen+Gillan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const evangelinelilly      = "https://tse1.mm.bing.net/th?q=Evangeline+Lilly+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tessathompson        = "https://tse1.mm.bing.net/th?q=Tessa+Thompson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const naomiwatts           = "https://tse1.mm.bing.net/th?q=Naomi+Watts+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const davidcorenswet = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DTgBS4v-YuKCCxt7tn6XYZ3Dvv8GU1QPUtU4aAulsQ&s=10";
const rachelbrosnahan ="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTJllSbX3rE_arY3wXRNxfVX2D2MQj7XF1jzNofIKacLOlvKkwLq0r9kJqDErKcMZUCW1bYo01ozguQieL_YHg0hGM4qEMxL1hC09YJloBoYzvX4R0pvNV0QOpXxdNo3QAVVRZW6HUNzMSz&s=19";
const nicholashoult ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9weFsDkhYNBI4IYhBHT8WkQFEnwd_imzp7pRa3scneO4kUpdN5ehbXHfo81-3-tpm8FU8S1ZP--dGAhSg5j2Vw-JcxENtgTT226oU-VbO&s=10";
const edigathegi="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtCTsKu--bO-a3E0KM4cN2dkM3b3sPyNnUipzgDsYsJrMeC-nNXUVd8qUgDldjUNSgTtBWOAAyxk54s-Vy_M10_KycKTINp65n1Rm0cPl&s=10";
const anthonycarrigan = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2xEZQwgmH51M8DllbH4rWMG_hoIdLEOETZpF9U67MwmPOD4eSVBpoHL4qGx9X59PvYa85Nb55LNDVFyIK5omhhX60pFfdgHwmyTR3pVPcw&s=10";
const nathanfillion="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQKE53eBY6bXN6sug-DUiwNjbpux2jIgwDM_rbIS0sueepZLpAK95DJEN7RMKlMWdTNIeM2juOM8O4pOMfq8bn_6BC4xXUB87z7shB96SJRLhkkyn9_spJEyxmx9povTI2MLwcMLhRso0U&s=19";
const isabelamerced ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0tBXJwn38AbdbZB3L8YRd6GAjU0nn-kDvGYrOu_msOMpA70-Bbj7JjCK2MHTD4XHzX4EOp5IcJTVeMru2lPpXklTkB3bxZsmy3jwsL-f&s=10";
const skylergisondo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzKXtvWTKXQmF9TT3BeQKAurDQezRWIiW9NUffiVFV13wuGIzSrM3lK4AcWfu7o4lR-4ks4XtX6qSy7ypLyIqiHnFkkOrlmQzejpbWyO5Mw&s=10";
const michaelshannon="";
const  dianelane ="";
const laurencefishburne ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IMvJMtru1Bcf2MhfQMREb6l50EEh4nawj9FIRuHFDLKGkirUQEu2eusu_8sc6AHLx677aRcq32BCQDmh78ZGN8XG5zDcQmPUAzSTAUiX&s=10";
const antjetraue ="";
const  maggiegyllenhaal = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadGSKUv1EOcCC9XOPwDbEbXAPDjBibhmiheqX3S3wLY1yFwsNtt7gLFoiVjtfJfwMmrGSu82ApGAZobcdxFwIHHqGKhctzVSme1LFiiZy&s=10";
const heathledger="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjyG5NLBcz6gtOhSqYtdlhzAnOy3LNrtkmW-BH7snLgoEZ6oOOahcs8hc11ImlpiWWNc2iuVFZoTHxk7LiPdmJKQ05dltlKGEYVbgcdsdHw&s=10";
const aaroneckhart = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl7SKGX4OnZOxOKzUteolgqeVgJcuaGpFHAeFhmglR_ZYcSSO81r9wzjJGe8o-oOT7ASIXo6wtvH_GFEgZC6RcUHp6P9om6Jzs7td56xbkw&s=10";
const garyoldman = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12di_12T9UuyRGRHdXp88fdeY-8_3pVpFDyu2JTq53a0Cmj9QJtQhmhc4POpnseljMSwkXnRTnSnMQW1FQEaqAQZ1rNNT7wOpKWvWaQI_&s=10";
const ericroberts = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWOopBFmyPYykTU06KN0ZWlMDe3i7bfUUEYaaaN7N77GMaFsLnrHJewkR1-2hfz2fvFAPPJQn0ZOvThfDxFa2fcHFz1jYnjqyPLKRYf-1&s=10";
const brettcullen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7ERY2O9SVAhTPuBkYcjdpsU6fpEHjXVlSY2rtucw-dhG3S2Vz6NF4OUwP0TCvDBNzIiLtXRI33W76iv8BtxGALPxpLzs7dHmpHnW2fODkA&s=10";
const francesconroy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9Wfw9D64Q1GhPx-L8z2-Nqj83yqAVUy1s2esNvPFE1w-qEy88WYa-wqjCKvfg6HQAVLyhIGN8Ndm4twTrEnlB3-3oYNWDpMSkn6mGW-XXQ&s=10";
const sheawhigham = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeS9EzB3sb_GlUPG4rk81NjtD8hn1tXeoOa9veSwRpnNv_OQ_led75bL5geeBbWURRnLbcTfoQlixPCIzR7KhnbpwcFfdY0Lj7EbWlEwG&s=10";
const billcamp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vKDJrOtPccXUIIx7Y5FA4rTyBQJABQNGTtX9t0FpC1JwSGhXsdvUheRShCyIt1UuTu-gIpVZHDsK2DXd6D4SwAoyJt7t0vX-v-l-S9FK&s=10";
const glennfleshler = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPR5WA1TDi3wUGdCkm2VO1P_9_6EJehLW279Q0fMK71TvVLKwTbeHXCWBGu71BGO72AskCP4rEaq-fZGBTygMjZM2CHJwnmkcf8hltsJO7&s=10";
const kerrywashington  = "https://tse1.mm.bing.net/th?q=kerry+washington+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const chriscooper      = "https://tse1.mm.bing.net/th?q=chris+cooper+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const cristelaalonzo   = "https://tse1.mm.bing.net/th?q=cristela+alonzo+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
// BlackBerry
const jaybaruchel       = "https://tse1.mm.bing.net/th?q=Jay+Baruchel+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const glennhowerton     = "https://tse1.mm.bing.net/th?q=Glenn+Howerton+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const mattjohnson       = "https://tse1.mm.bing.net/th?q=Matt+Johnson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const richsommer        = "https://tse1.mm.bing.net/th?q=Rich+Sommer+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michaelironside   = "https://tse1.mm.bing.net/th?q=Michael+Ironside+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const saulrubinek       = "https://tse1.mm.bing.net/th?q=Saul+Rubinek+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const caryelwes         = "https://tse1.mm.bing.net/th?q=Cary+Elwes+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sungwoncho        = "https://tse1.mm.bing.net/th?q=SungWon+Cho+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Luca
const jacobtremblay     = "https://tse1.mm.bing.net/th?q=Jacob+Tremblay+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const emmaberman        = "https://tse1.mm.bing.net/th?q=Emma+Berman+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const marcobarricelli   = "https://tse1.mm.bing.net/th?q=Marco+Barricelli+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const mayarudolph       = "https://tse1.mm.bing.net/th?q=Maya+Rudolph+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jimgaffigan       = "https://tse1.mm.bing.net/th?q=Jim+Gaffigan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const saverioraimondo   = "https://tse1.mm.bing.net/th?q=Saverio+Raimondo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sachabaroncohen   = "https://tse1.mm.bing.net/th?q=Sacha+Baron+Cohen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// The Social Network
const jesseeisenberg    = "https://tse1.mm.bing.net/th?q=Jesse+Eisenberg+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const justintimberlake  = "https://tse1.mm.bing.net/th?q=Justin+Timberlake+portrait&w=500&h=500&c=7&rs=1&p=0";
const armiehammer       = "https://tse1.mm.bing.net/th?q=Armie+Hammer+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const maxminghella      = "https://tse1.mm.bing.net/th?q=Max+Minghella+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rooneymara        = "https://tse1.mm.bing.net/th?q=Rooney+Mara+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const josephmazzello    = "https://tse1.mm.bing.net/th?q=Joseph+Mazzello+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brendasong        = "https://tse1.mm.bing.net/th?q=Brenda+Song+actress+portrait&w=500&h=500&c=7&rs=1&p=0";

// Prisoners
const mariabello        = "https://tse1.mm.bing.net/th?q=Maria+Bello+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const terrencehoward    = "https://tse1.mm.bing.net/th?q=Terrence+Howard+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const melissaleo        = "https://tse1.mm.bing.net/th?q=Melissa+Leo+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const pauldano          = "https://tse1.mm.bing.net/th?q=Paul+Dano+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dylanminnette     = "https://tse1.mm.bing.net/th?q=Dylan+Minnette+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

const emilymortimer       = "https://tse1.mm.bing.net/th?q=Emily+Mortimer+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const eddieizzard         = "https://tse1.mm.bing.net/th?q=Eddie+Izzard+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const johnturturro        = "https://tse1.mm.bing.net/th?q=John+Turturro+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const thomaskretschmann   = "https://tse1.mm.bing.net/th?q=Thomas+Kretschmann+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const joemantegna         = "https://tse1.mm.bing.net/th?q=Joe+Mantegna+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// ==========================================================================
//  ACTORS FOR THE LATEST MOVIES - paste each photo link between the quotes.
// ==========================================================================

// Free Guy
const jodiecomer             = "https://tse1.mm.bing.net/th?q=Jodie+Comer+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const joekeery               = "https://tse1.mm.bing.net/th?q=Joe+Keery+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lilrelhowery           = "https://tse1.mm.bing.net/th?q=Lil+Rel+Howery+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const utkarshambudkar        = "https://tse1.mm.bing.net/th?q=Utkarsh+Ambudkar+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const taikawaititi           = "https://tse1.mm.bing.net/th?q=Taika+Waititi+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// The Wolf of Wall Street
const kylechandler           = "https://tse1.mm.bing.net/th?q=Kyle+Chandler+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const robreiner              = "https://tse1.mm.bing.net/th?q=Rob+Reiner+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jonfavreau             = "https://tse1.mm.bing.net/th?q=Jon+Favreau+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeandujardin           = "https://tse1.mm.bing.net/th?q=Jean+Dujardin+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// IT
const billskarsgard          = "https://tse1.mm.bing.net/th?q=Bill+Skarsgard+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jaedenmartell          = "https://tse1.mm.bing.net/th?q=Jaeden+Martell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeremyraytaylor        = "https://tse1.mm.bing.net/th?q=Jeremy+Ray+Taylor+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sophialillis           = "https://tse1.mm.bing.net/th?q=Sophia+Lillis+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const finnwolfhard           = "https://tse1.mm.bing.net/th?q=Finn+Wolfhard+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const wyattoleff             = "https://tse1.mm.bing.net/th?q=Wyatt+Oleff+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const chosenjacobs           = "https://tse1.mm.bing.net/th?q=Chosen+Jacobs+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// IT Chapter Two
const billhader              = "https://tse1.mm.bing.net/th?q=Bill+Hader+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const isaiahmustafa          = "https://tse1.mm.bing.net/th?q=Isaiah+Mustafa+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jayryan                = "https://tse1.mm.bing.net/th?q=Jay+Ryan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamesransone           = "https://tse1.mm.bing.net/th?q=James+Ransone+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const andybean               = "https://tse1.mm.bing.net/th?q=Andy+Bean+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Black Widow
const davidharbour           = "https://tse1.mm.bing.net/th?q=David+Harbour+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rachelweisz            = "https://tse1.mm.bing.net/th?q=Rachel+Weisz+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const otfagbenle             = "https://tse1.mm.bing.net/th?q=O+T+Fagbenle+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const olgakurylenko          = "https://tse1.mm.bing.net/th?q=Olga+Kurylenko+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const williamhurt            = "https://tse1.mm.bing.net/th?q=William+Hurt+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Project Hail Mary
const sandrahuller           = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRNbizfKZI5THTxiyfRrfTzE-yk0XYuLwVb-fpEUeo88zatrCxiUB6HyYq7BnKSPTC_nPgle-nl_jW4FQvpVEfmrvT5eFk9Tb7xm9OV_6f9Ma5IRroSfjfMtUOI_xnqHO9xA_bwJIGdBH4&s=19";
const lionelboyce            = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCA_HNN2G0kt5rlBEYl-h4q0Q7mbL6RuM2kms35W8PQNjv20gE6B5SbVGWMZ6bwPUPm-tr0qtljLKlA7gQnhq4F2bY8vkANrqk6Ry8XhP&s=10";
const kenleung               = "https://tse1.mm.bing.net/th?q=Ken+Leung+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const milanavayntrub         = "https://tse1.mm.bing.net/th?q=Milana+Vayntrub+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const priyakansara           = "https://tse1.mm.bing.net/th?q=Priya+Kansara+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamesortiz             = "https://tse1.mm.bing.net/th?q=James+Ortiz+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Ballerina
const anjelicahuston         = "https://tse1.mm.bing.net/th?q=Anjelica+Huston+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const gabrielbyrne           = "https://tse1.mm.bing.net/th?q=Gabriel+Byrne+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lancereddick           = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a2KhArBLf1krCy7GYmMLcyO9pHClSi_PLX858U7rlQ&s=10";
const ianmcshane             = "https://tse1.mm.bing.net/th?q=Ian+McShane+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const normanreedus           = "https://tse1.mm.bing.net/th?q=Norman+Reedus+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const catalinasandinomoreno  = "https://tse1.mm.bing.net/th?q=Catalina+Sandino+Moreno+actress+portrait&w=500&h=500&c=7&rs=1&p=0";


// Thunderbolts*
const sebastianstan          = "https://tse1.mm.bing.net/th?q=Sebastian+Stan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const wyattrussell           = "https://tse1.mm.bing.net/th?q=Wyatt+Russell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const geraldineviswanathan   = "https://tse1.mm.bing.net/th?q=Geraldine+Viswanathan+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const julialouisdreyfus      = "https://tse1.mm.bing.net/th?q=Julia+Louis+Dreyfus+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const hannahjohnkamen        = "https://tse1.mm.bing.net/th?q=Hannah+John-Kamen+actress+portrait&w=500&h=500&c=7&rs=1&p=0";

// Predator: Badlands
const ellefanning                   = "https://tse1.mm.bing.net/th?q=Elle+Fanning+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const dimitriusschusterkoloamatangi = "https://tse1.mm.bing.net/th?q=Dimitrius+Schuster-Koloamatangi+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Godzilla Minus One
const ryunosukekamiki        = "https://tse1.mm.bing.net/th?q=Ryunosuke+Kamiki+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const minamihamabe           = "https://tse1.mm.bing.net/th?q=Minami+Hamabe+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const yukiyamada             = "https://tse1.mm.bing.net/th?q=Yuki+Yamada+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const munetakaaoki           = "https://tse1.mm.bing.net/th?q=Munetaka+Aoki+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const hidetakayoshioka       = "https://tse1.mm.bing.net/th?q=Hidetaka+Yoshioka+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sakuraando             = "https://tse1.mm.bing.net/th?q=Sakura+Ando+actress+portrait&w=500&h=500&c=7&rs=1&p=0";


// Spider-Man: Homecoming

const marisatomei        = "https://tse1.mm.bing.net/th?q=Marisa+Tomei+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jacobbatalon       = "https://tse1.mm.bing.net/th?q=Jacob+Batalon+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tonyrevolori       = "https://tse1.mm.bing.net/th?q=Tony+Revolori+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const laurenharrier      = "https://tse1.mm.bing.net/th?q=Laura+Harrier+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const bokeemwoodbine     = "https://tse1.mm.bing.net/th?q=Bokeem+Woodbine+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Bloodshot
// Bloodshot
const eizagonzalez       = "https://tse1.mm.bing.net/th?q=Eiza+Gonzalez+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const samheughan         = "https://tse1.mm.bing.net/th?q=Sam+Heughan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tobykebbell        = "https://tse1.mm.bing.net/th?q=Toby+Kebbell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const guypearce          = "https://tse1.mm.bing.net/th?q=Guy+Pearce+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lamornemorris      = "https://tse1.mm.bing.net/th?q=Lamorne+Morris+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const talulahriley       = "https://tse1.mm.bing.net/th?q=Talulah+Riley+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
// The Dark Knight Rises
// The Dark Knight Rises
const josephgordonlevitt = "https://tse1.mm.bing.net/th?q=Joseph+Gordon+Levitt+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const marioncotillard    = "https://tse1.mm.bing.net/th?q=Marion+Cotillard+actress+portrait&w=500&h=500&c=7&rs=1&p=0";


// John Wick
const michaelnyqvist  = "https://tse1.mm.bing.net/th?q=Michael+Nyqvist+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const alfieallen      = "https://tse1.mm.bing.net/th?q=Alfie+Allen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const deanwinters     = "https://tse1.mm.bing.net/th?q=Dean+Winters+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const adriannepalicki = "https://tse1.mm.bing.net/th?q=Adrianne+Palicki+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const bridgetmoynahan = "https://tse1.mm.bing.net/th?q=Bridget+Moynahan+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const johnleguizamo   = "https://tse1.mm.bing.net/th?q=John+Leguizamo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// John Wick: Chapter 2
const riccardoscamarcio = "https://tse1.mm.bing.net/th?q=Riccardo+Scamarcio+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rubyrose          = "https://tse1.mm.bing.net/th?q=Ruby+Rose+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const common            = "https://tse1.mm.bing.net/th?q=Common+rapper+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const franconero        = "https://tse1.mm.bing.net/th?q=Franco+Nero+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const peterstormare     = "https://tse1.mm.bing.net/th?q=Peter+Stormare+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// John Wick: Chapter 3 - Parabellum
const markdacascos    = "https://tse1.mm.bing.net/th?q=Mark+Dacascos+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const asiakatedillon  = "https://tse1.mm.bing.net/th?q=Asia+Kate+Dillon+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jeromeflynn     = "https://tse1.mm.bing.net/th?q=Jerome+Flynn+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// John Wick: Chapter 4
const donnieyen         = "https://tse1.mm.bing.net/th?q=Donnie+Yen+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const hiroyukisanada    = "https://tse1.mm.bing.net/th?q=Hiroyuki+Sanada+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const shamieranderson   = "https://tse1.mm.bing.net/th?q=Shamier+Anderson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rinasawayama      = "https://tse1.mm.bing.net/th?q=Rina+Sawayama+portrait&w=500&h=500&c=7&rs=1&p=0";
const scottadkins       = "https://tse1.mm.bing.net/th?q=Scott+Adkins+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const clancybrown       = "https://tse1.mm.bing.net/th?q=Clancy+Brown+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// Spider-Man: Far From Home
const cobiesmulders = "https://tse1.mm.bing.net/th?q=Cobie+Smulders+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const martinstarr   = "https://tse1.mm.bing.net/th?q=Martin+Starr+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jbsmoove      = "https://tse1.mm.bing.net/th?q=JB+Smoove+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// Bruce Almighty
const philipbakerhall = "https://tse1.mm.bing.net/th?q=Philip+Baker+Hall+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const catherinebell   = "https://tse1.mm.bing.net/th?q=Catherine+Bell+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const lisaannwalter   = "https://tse1.mm.bing.net/th?q=Lisa+Ann+Walter+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const noradunn        = "https://tse1.mm.bing.net/th?q=Nora+Dunn+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const eddiejemison    = "https://tse1.mm.bing.net/th?q=Eddie+Jemison+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
// Rebel Moon (Part One and Part Two)
const sofiaboutella    = "https://tse1.mm.bing.net/th?q=Sofia+Boutella+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const charliehunnam    = "https://tse1.mm.bing.net/th?q=Charlie+Hunnam+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michielhuisman   = "https://tse1.mm.bing.net/th?q=Michiel+Huisman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const doonabae         = "https://tse1.mm.bing.net/th?q=Doona+Bae+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const staznair         = "https://tse1.mm.bing.net/th?q=Staz+Nair+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rayfisher        = "https://tse1.mm.bing.net/th?q=Ray+Fisher+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const cleopatracoleman = "https://tse1.mm.bing.net/th?q=Cleopatra+Coleman+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const stuartmartin     = "https://tse1.mm.bing.net/th?q=Stuart+Martin+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Spider-Man trilogy (2002 / 2004 / 2007)
const kirstendunst      = "https://tse1.mm.bing.net/th?q=Kirsten+Dunst+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamesfranco       = "https://tse1.mm.bing.net/th?q=James+Franco+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const cliffrobertson    = "https://tse1.mm.bing.net/th?q=Cliff+Robertson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const rosemaryharris    = "https://tse1.mm.bing.net/th?q=Rosemary+Harris+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jksimmons         = "https://tse1.mm.bing.net/th?q=J+K+Simmons+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brucecampbell     = "https://tse1.mm.bing.net/th?q=Bruce+Campbell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const alfredmolina      = "https://tse1.mm.bing.net/th?q=Alfred+Molina+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const donnamurphy       = "https://tse1.mm.bing.net/th?q=Donna+Murphy+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const danielgillies     = "https://tse1.mm.bing.net/th?q=Daniel+Gillies+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dylanbaker        = "https://tse1.mm.bing.net/th?q=Dylan+Baker+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const elizabethbanks    = "https://tse1.mm.bing.net/th?q=Elizabeth+Banks+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const thomashadenchurch = "https://tse1.mm.bing.net/th?q=Thomas+Haden+Church+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tophergrace       = "https://tse1.mm.bing.net/th?q=Topher+Grace+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brycedallashoward = "https://tse1.mm.bing.net/th?q=Bryce+Dallas+Howard+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamescromwell     = "https://tse1.mm.bing.net/th?q=James+Cromwell+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// Twisters
const daisyedgarjones = "https://tse1.mm.bing.net/th?q=Daisy+Edgar-Jones+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const anthonyramos    = "https://tse1.mm.bing.net/th?q=Anthony+Ramos+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const brandonperea    = "https://tse1.mm.bing.net/th?q=Brandon+Perea+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const mauratierney    = "https://tse1.mm.bing.net/th?q=Maura+Tierney+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const sashalane       = "https://tse1.mm.bing.net/th?q=Sasha+Lane+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const katyobrian      = "https://tse1.mm.bing.net/th?q=Katy+O'Brian+actress+portrait&w=500&h=500&c=7&rs=1&p=0";


// War Machine
const alanritchson    = "https://tse1.mm.bing.net/th?q=Alan+Ritchson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dennisquaid     = "https://tse1.mm.bing.net/th?q=Dennis+Quaid+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const stephanjames    = "https://tse1.mm.bing.net/th?q=Stephan+James+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jaicourtney     = "https://tse1.mm.bing.net/th?q=Jai+Courtney+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const esaimorales     = "https://tse1.mm.bing.net/th?q=Esai+Morales+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const keiynanlonsdale = "https://tse1.mm.bing.net/th?q=Keiynan+Lonsdale+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const danielwebber    = "https://tse1.mm.bing.net/th?q=Daniel+Webber+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

const jaafarjackson    = "https://tse1.mm.bing.net/th?q=Jaafar+Jackson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const colmandomingo    = "https://tse1.mm.bing.net/th?q=Colman+Domingo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const nialong          = "https://tse1.mm.bing.net/th?q=Nia+Long+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const julianokruevaldi = "https://tse1.mm.bing.net/th?q=Juliano+Valdi+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const katgraham        = "https://tse1.mm.bing.net/th?q=Kat+Graham+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const larenztate       = "https://tse1.mm.bing.net/th?q=Larenz+Tate+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// The Founder
const nickofferman     = "https://tse1.mm.bing.net/th?q=Nick+Offerman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const johncarrolllynch = "https://tse1.mm.bing.net/th?q=John+Carroll+Lynch+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const lauradern        = "https://tse1.mm.bing.net/th?q=Laura+Dern+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const lindacardellini  = "https://tse1.mm.bing.net/th?q=Linda+Cardellini+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const bjnovak          = "https://tse1.mm.bing.net/th?q=BJ+Novak+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const patrickwilson    = "https://tse1.mm.bing.net/th?q=Patrick+Wilson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";


// Barbie
const americaferrera   = "https://tse1.mm.bing.net/th?q=America+Ferrera+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const katemckinnon     = "https://tse1.mm.bing.net/th?q=Kate+McKinnon+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const issarae           = "https://tse1.mm.bing.net/th?q=Issa+Rae+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const rheaperlman       = "https://tse1.mm.bing.net/th?q=Rhea+Perlman+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const simuliu           = "https://tse1.mm.bing.net/th?q=Simu+Liu+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kingsleybenadir   = "https://tse1.mm.bing.net/th?q=Kingsley+Ben-Adir+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const alexandrashipp    = "https://tse1.mm.bing.net/th?q=Alexandra+Shipp+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const michaelcera       = "https://tse1.mm.bing.net/th?q=Michael+Cera+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
// Dungeons & Dragons

const regejeanpage         = "https://tse1.mm.bing.net/th?q=Reg%C3%A9-Jean+Page+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const justicesmith         = "https://tse1.mm.bing.net/th?q=Justice+Smith+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

const hughgrant            = "https://tse1.mm.bing.net/th?q=Hugh+Grant+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const daisyhead            = "https://tse1.mm.bing.net/th?q=Daisy+Head+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
// Sonic
const benschwartz          = "https://tse1.mm.bing.net/th?q=Ben+Schwartz+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const jamesmarsden         = "https://tse1.mm.bing.net/th?q=James+Marsden+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tikasumpter          = "https://tse1.mm.bing.net/th?q=Tika+Sumpter+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const adampally            = "https://tse1.mm.bing.net/th?q=Adam+Pally+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const natasharothwell      = "https://tse1.mm.bing.net/th?q=Natasha+Rothwell+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const colleenoshaughnessey = "https://tse1.mm.bing.net/th?q=Colleen+O'Shaughnessey+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const shemarmoore          = "https://tse1.mm.bing.net/th?q=Shemar+Moore+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Arrival

const forestwhitaker   = "https://tse1.mm.bing.net/th?q=Forest+Whitaker+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const michaelstuhlbarg = "https://tse1.mm.bing.net/th?q=Michael+Stuhlbarg+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Smile
const sosiebacon    = "https://tse1.mm.bing.net/th?q=Sosie+Bacon+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jessietusher  = "https://tse1.mm.bing.net/th?q=Jessie+T.+Usher+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kylegallner   = "https://tse1.mm.bing.net/th?q=Kyle+Gallner+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const caitlinstasey = "https://tse1.mm.bing.net/th?q=Caitlin+Stasey+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const kalpenn       = "https://tse1.mm.bing.net/th?q=Kal+Penn+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const robinweigert  = "https://tse1.mm.bing.net/th?q=Robin+Weigert+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
// Ghosted
// Sonic 3
const leemajdoub = "https://tse1.mm.bing.net/th?q=Lee+Majdoub+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const adrienbrody = "https://tse1.mm.bing.net/th?q=Adrien+Brody+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
// ==========================================================================
//  ACTORS STILL WAITING FOR A PHOTO
//  These names were used in the movie casts below but had no line here, which made
//  the WHOLE movies.js crash (so the Studio pages and the home page showed no movies).
//  Paste an image link between the quotes to show the actor photo.
//  Until then the cast card simply shows no photo.
// ==========================================================================

// Once Upon a Time in Hollywood
const emilehirsch      = "https://tse1.mm.bing.net/th?q=Emile+Hirsch+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const margaretqualley  = "https://tse1.mm.bing.net/th?q=Margaret+Qualley+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const timothyolyphant  = "https://tse1.mm.bing.net/th?q=Timothy+Olyphant+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const juliabutters     = "https://tse1.mm.bing.net/th?q=Julia+Butters+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const austinbutler     = "https://tse1.mm.bing.net/th?q=Austin+Butler+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const dakotafanning    = "https://tse1.mm.bing.net/th?q=Dakota+Fanning+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const brucedern        = "https://tse1.mm.bing.net/th?q=Bruce+Dern+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// The Intern
const reneruso         = "https://tse1.mm.bing.net/th?q=Rene+Russo+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const andersholm       = "https://tse1.mm.bing.net/th?q=Anders+Holm+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const adamdevine        = "https://tse1.mm.bing.net/th?q=Adam+DeVine+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const andrewrannells   = "https://tse1.mm.bing.net/th?q=Andrew+Rannells+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// The Perks of Being a Wallflower
const loganlerman      = "https://tse1.mm.bing.net/th?q=Logan+Lerman+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ezramiller       = "https://tse1.mm.bing.net/th?q=Ezra+Miller+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const maewhitman       = "https://tse1.mm.bing.net/th?q=Mae+Whitman+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const katewalsh        = "https://tse1.mm.bing.net/th?q=Kate+Walsh+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const dylanmcdermott   = "https://tse1.mm.bing.net/th?q=Dylan+McDermott+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ninadobrev       = "https://tse1.mm.bing.net/th?q=Nina+Dobrev+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const movies = {


  
  oppenheimer: {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    genres: ["Biography", "Drama", "History"],
    pills: ["2023", "3H 00M", "IMDb 8.4", "R"],
    overview:
      "At the height of World War II, theoretical physicist J. Robert Oppenheimer is chosen to lead a secret laboratory in Los Alamos. His work changes warfare forever—and leaves him confronting the political and moral fallout of the world he helped create.",
    language: "Dual Audio (English, Hindi)",
    caution: "Dual Audio is available when you download the movie",
    watchLink: "https://drive.google.com/file/d/1SDW6xxsL41duRl7l6hnDzppFAg9rA934/view?usp=sharing",

   
    
    accent: "230, 116, 50",

    hero: "Oppenheimer2.jpg",
    poster: "poster_opennheimer.jpg",

    
    trailers: [
      {
        id: "uYPbbksJxIg",
        alt: "Official Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEUzeFWNcQE5e5OLLtLdl-BP3CoTh6LFtGv-AQ7bmMA&s=10.jpg"
      },
      {
        id: "bK6ldnjE3Y0",
        alt: "Trailer Clip 2",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqvoArWzEa58Fjx05MNmIGakdn3EvUqCYNecNKe74Gg&s=10"
      },
      {
        id: "tK0IDmSYYGk",
        alt: "Trailer Clip 3",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRZyw5TKYI2-qHC4fyTFga3czfon76EVJ7g2oIANcvA&s=10"
      }
    ],

    cast: [
      {
        name: "Cillian Murphy",
        role: "J. Robert Oppenheimer",
        img: cillianmurphy
      },
      {
        name: "Robert Downey Jr.",
        role: "Lewis Strauss",
        img: robertdowneyjr
      },
      {
        name: "Florence Pugh",
        role: "Jean Tatlock",
        img: florencepugh
      },
      {
        name: "Matt Damon",
        role: "Leslie Groves",
        img: mattdamon
      },
      {
        name: "Emily Blunt",
        role: "Kitty Oppenheimer",
        img: emilyblunt
      },
      {
        name: "Kenneth Branagh",
        role: "Niels Bohr",
        img: kennethbranagh
      },
      {
        name: "Benny Safdie",
        role: "Edward Teller",
        img: bennysafdie
      }
    ]
  },



  
wonderwoman: {
    title: "Wonder Woman",
    director: "Patty Jenkins",
    genres: ["Action", "Drama", "War"],
    pills: ["2017", "2H 21M", "IMDb 7.4", "PG-13"],
    overview:
      "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
    language: "Dual Audio (English, Hindi)",
    caution: "Dual Audio is available when you download the movie",
    watchLink: "https://drive.google.com/file/d/1k61MiQuODFGOVtbIOj2fiYZZR-GbfHxK/view?usp=sharing",

    
 accent: "173, 27, 27",
theme: {
  buttonColor: "#116ecb",
  buttonGlow: "#2f708f",
  lineColor: "#ffffff",
  backHover: "#AF483A",
  castHover: "#ffffff",
  cardHover: "#ffffff",
  playHover: "#AF483A",
  cautionColor: "#d97b6c",
  textColor: "#ffffff",
  castRoleColor: "#ffffff",
  titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  titleLayout: "half",
  heroOverlay: "linear-gradient(to top, rgba(42, 73, 102, 0.92) 0%, rgba(175, 72, 58, 0.3) 40%, transparent 65%)",
  infoBackground: "linear-gradient(360deg, #AD1B1B 20%, #CD9B3D 80%)",
  castBackground: "linear-gradient(360deg, #AD1B1B 20%, #CD9B3D 80%)",
  reviewsBackground: "linear-gradient(360deg, #AD1B1B 20%, #CD9B3D 80%)",
  reviewCards: "light"
},
    hero: "wonder_woman.jpg",
    poster: "wonder_woman+poster.jpg",

    trailers: [
      {
        id: "1Q8fG0TtVAY",
        alt: "Official Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfqNqNddxIDhtmDyupUS5APV-e_Vg1MHFsoMm3mwqpw&s=10"
      },
      {
        id: "sfM7_JLk-84",
        alt: "Trailer Clip 2",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PAP_CvuRRrwMMTKJ79xSFuJLw08j9j1efzT48trpyA&s=10"
      },
      {
        id: "pJCgeOAKXyg",
        alt: "Trailer Clip 3",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ttkdloFAteHEDMBsOlzUBu5tKparUPxpsmXnqoafEA&s=10"
      }
    ],

    cast: [
      {
        name: "Gal Gadot",
        role: "Wonder Woman",
        img: galgadot
      },
      {
        name: "Chris pine",
        role: "steve trevor",
        img: chrispine
      },
      {
        name: "Connie Neilsen",
        role: "Hippolyta",
        img: connieneilsen
      },
      {
        name: "Robin Wright",
        role: "Antiope",
        img: robinwright
      },
      {
        name: "Elena Anaya",
        role: "Dr. Maru",
        img: elenaanaya
      },
      {
        name: "Danny Huston",
        role: "Erich Ludendorff",
        img: dannyhuston
      },
   
    ]
  },



  aladdin: {
  title: "Aladdin",
  director: "Guy Ritchie",            
  genres: ["Adventure", "Fantasy", "Musical"],
  pills: ["2019", "2H 8M", "PG"],       
  overview:
    "A kind-hearted street thief named Aladdin finds a magic lamp and, with the help of a wisecracking Genie, sets out to win the heart of Princess Jasmine while stopping the scheming Jafar.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1m3L2jfHGs5ROfNYsYN3h_tc3tDZ9rEGh/view?usp=sharing",

  accent: "200, 32, 47",
  theme: {
    buttonColor: "#d91e26",
    buttonGlow: "#d91e26",
    lineColor: "#ffc82e",
    backHover: "#c8202f",
    castHover: "#ffc82e",
    cardHover: "#ffc82e",
    playHover: "#d91e26",
    cautionColor: "#ffd25a",
    textColor: "#ffffff",
    castRoleColor: "#e0bd68",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    titleLayout: "center",
    heroOverlay: "linear-gradient(to top, rgba(26, 5, 8, 0.88) 0%, rgba(26, 5, 8, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 50% 125%, #b3122a 0%, #5a0d18 48%, #1a0508 100%)",
    castBackground: "linear-gradient(180deg, #1a0508 0%, #5a0d18 100%)",
    reviewsBackground: "linear-gradient(180deg, #2a0710 0%, #6b0f1a 65%, #a3162a 100%)",
    reviewCards: "light"
  },

  hero: "aladdin.jpg",
  poster: "aladdin_poster.jpg",

  trailers: [
    {
      id: "-G5XI61Y9ms",
      alt: "Official Trailer",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREd_c8NE3KMqZUrb6NQ6lDaURP3MRz49uYdBQXLJ_3XQ&s=10"
    },
    {
      id: "eitDnP0_83k",
      alt: "Teaser Trailer",
      thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJINgvnaeidc3mDmCdrBhYYvOdbxKSC4CQtWPvPEm3iA&s=10"
    }
  ],


  cast: [
    { name: "Mena Massoud",    role: "Aladdin",       img: menamassoud },
    { name: "Naomi Scott",     role: "Jasmine",       img: naomiscott },
    { name: "Will Smith",      role: "Genie",         img: willsmith },
    { name: "Marwan Kenzari",  role: "Jafar",         img: marwankenzari },
    { name: "Navid Negahban",  role: "The Sultan",    img: navidnegahban },
    { name: "Nasim Pedrad",    role: "Dalia",         img: nasimpedrad },
    { name: "Billy Magnussen", role: "Prince Anders", img: billymagnussen }
  ]
},




cars3: {
  title: "Cars 3",
  director: "Brian Fee",                
  genres: ["Family", "Sports"],
  pills: ["2017", "1H 42M", "IMDb 6.7"],
  overview:
    "Lighting McQueen, a legendary racer, is overcome by new generation racers. He sets out to prove that he is the best racer in the world with the help of Cruz Ramirez.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1nq65IaVpaMtMRZspnzKmudeygu2VsbKz/view?usp=sharing",

  accent: "217, 30, 38",
  theme: {
    buttonColor: "#d91e26",
    buttonGlow: "#d91e26",
    lineColor: "#ffc82e",
    backHover: "#e50914",
    castHover: "#ffc82e",
    cardHover: "#ffc82e",
    playHover: "#d91e26",
    cautionColor: "#ff3838",
    textColor: "#ffffff",
    castRoleColor: "gray",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    titleLayout: "half",
    heroOverlay: "linear-gradient(to top, rgba(6, 12, 32, 0.85) 0%, rgba(6, 12, 32, 0.25) 40%, transparent 65%)",
    infoBackground: "linear-gradient(135deg, #12306e 0%, #0a1a40 45%, #000000 100%)",
    castBackground: "linear-gradient(180deg, #0a1a40 0%, #000000 100%)"
  },

  hero: "cars_3.jpg",                   
  poster: "cars3_poster.jpg",

  trailers: [
    {
      id: "2LeOH9AGJQM",
      alt: "Official Trailer",
      thumb: "https://i.ytimg.com/vi/E4K7JgPJ8-s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAUBKEnEcbxIT45rWiLUAOP6fo9uw"
    },
    {
      id: "RbDNpwlvevA",
      alt: "Trailer Clip 2",
      thumb: "https://i.ytimg.com/vi/RbDNpwlvevA/hqdefault.jpg"
    },
    {
      id: "blN_6St_v7w",
      alt: "Trailer Clip 3",
      thumb: "https://i.ytimg.com/vi/blN_6St_v7w/hqdefault.jpg"
    }
  ],

  cast: [
    { name: "Owen Wilson",         role: "Lightning McQueen", img : owenwilson },
    { name: "Cristela Alonzo",     role: "Cruz Ramirez",      img : cristelaalonzo },
    { name: "Chris Cooper",        role: "Smokey",            img : chriscooper },
    { name: "Armie Hammer",        role: "Jackson Storm",    img : armiehammer },
    { name: "Nathan Fillion",      role: "Sterling",         img: nathanfillion },
    { name: "Larry the Cable Guy", role: "Mater",            img  : larrythecableguy },
    { name: "Kerry Washington",    role: "Natalie Certain",   img : kerrywashington },
    { name: "Bonnie Hunt",         role: "Sally Carrera",     img : bonniehunt }
  ]
},
cars2: {
  title: "Cars 2",
  director: "John Lasseter",            // not in the file
  genres: ["Family", "Sports"],
  pills: ["2011", "1H 42M", "IMDb 6.2"],
  overview:
    "Lightning McQueen and his pal Mater sets off on the journey to compete in the World Grand Prix race. However, their journey gets halted midway when Mater gets caught up in a strange adventure.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1SDW6xxsL41duRl7l6hnDzppFAg9rA934/view?usp=sharing",

  accent: "217, 30, 38",
  theme: {
    buttonColor: "#d91e26",
    buttonGlow: "#d91e26",
    lineColor: "#ffc82e",
    backHover: "#e50914",
    castHover: "#ffc82e",
    cardHover: "#ffc82e",
    playHover: "#d91e26",
    cautionColor: "#ff3838",
    textColor: "#ffffff",
    castRoleColor: "gray",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    titleLayout: "right-half",          // title starts at left:50vw
    heroOverlay: "linear-gradient(to top, rgba(6, 12, 32, 0.85) 0%, rgba(6, 12, 32, 0.25) 40%, transparent 65%)",
    infoBackground: "linear-gradient(135deg, #b3122a 0%, #6b1d1d 35%, #0b5a2e 100%)",
    castBackground: "linear-gradient(180deg, #0b5a2e 0%, #04170c 100%)"
    // no reviews section
  },

  hero: "cars_2.jpg",
  poster: "cars2_poster.jpg",

  trailers: [
    { id: "oFTfAdauCOo", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SNmpSZOIqY0EkQgBqiW9_3n7hOfBQ8KoXHHOUE9PCg&s=10" },
    { id: "9b1rm1eECw8", alt: "Trailer Clip 2",  thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbwwhsa0FxHcNVq1O1Axcpa6amRMzUT537G5H4FsLZA&s=10" },
    { id: "HvuFPsipTOc", alt: "Trailer Clip 3",  thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZHyeknfF1RIPwrmJPxs-LrxHHDczV1aoHLvVThmHiw&s=10" }
  ],

  cast: [
    { name: "Owen Wilson",         role: "Lightning McQueen",   img: owenwilson },
    { name: "Larry the Cable Guy", role: "Mater",               img: larrythecableguy },
    { name: "Michael Caine",       role: "Finn McMissile",      img: michaelcaine },
    { name: "Emily Mortimer",      role: "Holley Shiftwell",    img: emilymortimer },
    { name: "Eddie Izzard",        role: "Sir Miles Axlerod",   img: eddieizzard },
    { name: "John Turturro",       role: "Francesco Bernoulli", img: johnturturro },
    { name: "Thomas Kretschmann",  role: "Professor Z",         img: thomaskretschmann },
    { name: "Joe Mantegna",        role: "Grem",                img: joemantegna }
  ]
},
cars: {
  title: "Cars",
  director: "John Lasseter",            // not in the file
  genres: ["Family", "Sports"],
  pills: ["2006", "1H 57M", "IMDb 7.3"],
  overview:
    "After the race at the Piston Cup Championship ends in a three-way tie-breaker, a rookie Lightning McQueen is desperate to make it to the winning position and take over the veteran Strip Weathers.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1SDW6xxsL41duRl7l6hnDzppFAg9rA934/view?usp=sharing",

  accent: "217, 30, 38",
  theme: {
    buttonColor: "#d91e26",
    buttonGlow: "#d91e26",
    lineColor: "#ffc82e",
    backHover: "#e50914",
    castHover: "#ffc82e",
    cardHover: "#ffc82e",
    playHover: "#d91e26",
    cautionColor: "#ff3838",
    textColor: "#ffffff",
    castRoleColor: "gray",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    titleLayout: "right-half",
    heroOverlay: "linear-gradient(to top, rgba(10, 6, 8, 0.85) 0%, rgba(10, 6, 8, 0.25) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 50% 125%, #8a2a14 0%, #2c1218 48%, #0f0a10 100%)",
    castBackground: "linear-gradient(180deg, #0f0a10 0%, #1d0e0e 100%)",
    reviewsBackground: "linear-gradient(360deg, #AD1B1B 20%, #CD9B3D 80%)",
    reviewCards: "light"
  },

  hero: "cars1.png",
  poster: "cars_poster.jpg",

  trailers: [
    { id: "XszNWHhpaTc", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDW_PUkJbxLH8pylFeQooRnKO7cG3XJ4xBs3awtweuA&s=10" },
    { id: "ODk1xDWZ0Ds", alt: "Trailer Clip 2",  thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgj7SaI2kj6yPPi88UaGm6eeIc-8TqrxnswSPQgOu7w&s=10" },
    { id: "Y0hdEWXRqCI", alt: "Trailer Clip 3",  thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDn1CyBg71YRo9gWEYpOc4Jn_5ggOd-KY3KUZXN_I5Q&s=10" }
  ],

  cast: [
    { name: "Owen Wilson",         role: "Lightning McQueen", img: owenwilson },
    { name: "Paul Newman",         role: "Doc Hudson",        img: paulnewman },
    { name: "Bonnie Hunt",         role: "Sally Carrera",     img: bonniehunt },
    { name: "Larry the Cable Guy", role: "Mater",             img: larrythecableguy },
    { name: "Tony Shalhoub",       role: "Luigi",             img: tonyshalhoub },
    { name: "Cheech Marin",        role: "Ramone",            img: cheechmarin },
    { name: "Michael Keaton",      role: "Chick Hicks",       img: michaelkeaton },
    { name: "George Carlin",       role: "Fillmore",          img: georgecarlin }
  ]
},



f1: {
  title: "F1",
  director: "Joseph Kosinski",          // not in the file (credit is commented out)
  genres: ["Sports", "Drama"],
  pills: ["2025", "2H 36M", "IMDb 7.6", "R"],
  overview:
    "In the 1990s, Sonny Hayes was Formula 1's most promising driver until an accident on the track nearly ended his career. Thirty years later, the owner of a struggling Formula 1 team convinces Sonny to return to racing and become the best in the world. Driving alongside the team's hotshot rookie, Sonny soon learns that the road to redemption is not something you can travel alone.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1O6rvsPvAi4M9p8oSdXLuvghShzA6fk4o/view?usp=drive_link",

  accent: "183, 201, 198",              // --accent: #b7c9c6
  theme: {
    buttonColor: "#b7c9c6",
    buttonGlow: "#b7c9c6",
    lineColor: "#b7c9c6",
    backHover: "#b7c9c6",
    castHover: "#e50914",
    cardHover: "#b7c9c6",
    playHover: "#b7c9c6",
    cautionColor: "#ff3838",
    textColor: "#ffffff",
    castRoleColor: "gray",
    buttonTextColor: "goldenrod",
    movieTitleColor: "goldenrod",
    titleFont: "'Titillium Web', 'Arial Black', Impact, sans-serif",   // italic, weight 900
    titleLayout: "left",                // bottom-left, left:50px, 165px, skewed -6deg
    heroOverlay: "none",                // f1.html has no hero gradient overlay
    infoBackground: "radial-gradient(circle at center, #1b2022 0%, #0a0c0d 100%)",
    castBackground: "#0a0b10"
    // reviews come from review.js (see notes)
  },

  hero: "f1.jpg",                      
  poster: "f1_poster.jpg",

  trailers: [
    { id: "8yh9BPUBbbQ", alt: "Official Trailer", thumb: "https://i.ytimg.com/vi/69ffwl-8pCU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmJOBfB204eD_SFStg8JnFPKhTzQ" },
    { id: "kyn3p8bItSE", alt: "Trailer Clip 2",   thumb: "https://i.ytimg.com/vi/kyn3p8bItSE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTo_BDxnWiq_CO5a5xMLYfxrKupw" },
    { id: "RUJip1TTp_E", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-jP6lgDDt1pDJsM-Wbz_fToKnovC62IFKaUepRYDZQ&s=10" }
  ],

  cast: [
    { name: "Brad Pitt",      role: "Sonny Hayes",      img: bradpitt },
    { name: "Damson Idris",   role: "Joshua Pearce",    img: damsonidris },
    { name: "Javier Bardem",  role: "Ruben Cervantes",  img: javierbardem },
    { name: "Kerry Condon",   role: "Kate McKenna",     img: kerrycondon },
    { name: "Tobias Menzies", role: "Peter Banning",    img: tobiasmenzies },
    { name: "Kim Bodnia",     role: "Kaspar Smolinski", img: kimbodnia }
  ]
},

  
thefallguy: {
  title: "The Fall Guy",
  director: "David Leitch",
  genres: ["Action", "Comedy"],
  pills: ["2024", "2H 6M", "IMDb 6.9", "PG-13"],
  overview:
    "Colt Seavers is a battle-scarred stuntman who has left the business after an injury. When the star of a big film goes missing, he is pulled back in to find him and, along the way, to win back the director he left behind.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1OeCgG1Zt04UnsgOsTidPl8DVB1lKu5X3/view?usp=sharing",
 accent: "255, 210, 31",
theme: {
  buttonColor: "#e8590c",
  buttonGlow: "rgba(255, 138, 31, 0.5)",
  lineColor: "#ffd21f",
  backHover: "#e8590c",
  castHover: "#ffd21f",
  cardHover: "#ffd21f",
  playHover: "#e8590c",
  cautionColor: "#ffd21f",
  textColor: "#e6eefc",
  castRoleColor: "#9db6de",
  titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  heroOverlay: "linear-gradient(to top, rgba(6, 20, 47, 0.9) 0%, rgba(6, 20, 47, 0.25) 40%, transparent 65%)",
  infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(255, 138, 31, 0.35) 0%, transparent 55%), linear-gradient(160deg, #0f3a7a 0%, #06142f 100%)",
  castBackground: "linear-gradient(180deg, #06142f 0%, #030a1a 100%)",
  reviewsBackground: "linear-gradient(180deg, #030a1a 0%, #0f3a7a 60%, #c2570f 100%)"
},
  hero: "the_fall_guy.jpg", poster: "the_fall_guy_poster.jpg",
  trailers: [
    { id: "j7jPnwVGdZ8", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl0oSvHQvDSDTPmu00wcLPyId1-BoZV5dtGc6BNoO5A&s=10" },
    { id: "mczCiT1fe2E", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOId8VJeEryxaWfnULw7zP2JOESQy0N6kw-g8bzN-jQw&s=10" },
    { id: "6bF_piyo0dg", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNm1BbnWDkx7GRN29mnRNuCR3dAxOyxJ9gok98rKkDQ&s=10" }
  ],
  cast: [
    { name: "Ryan Gosling",         role: "Colt Seavers", img: ryangosling },
    { name: "Emily Blunt",          role: "Jody Moreno",  img: emilyblunt },
    { name: "Aaron Taylor-Johnson", role: "Tom Ryder",    img: aarontaylorjohnson },
    { name: "Hannah Waddingham",    role: "Gail Meyer",   img: hannahwaddingham },
    { name: "Winston Duke",         role: "Dan Tucker",   img: winstonduke },
    { name: "Teresa Palmer",        role: "Iris",         img: teresapalmer },
    { name: "Stephanie Hsu",        role: "Alma Milan",   img: stephaniehsu }
  ]
},

damsel: {
  title: "Damsel",
  director: "Juan Carlos Fresnadillo",
  genres: ["Fantasy", "Adventure", "Action"],
  pills: ["2024", "1H 50M", "IMDb 6.2", "PG-13"],
  overview:
    "A young woman agrees to marry a handsome prince, only to find the marriage was a trap. She is thrown into a cave with a fire-breathing dragon and must rely on her wits and courage to survive.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1-B_wrC6oO8OBF_XEFW-JxCrLxGJjRC_n/view?usp=sharing",
  accent: "224, 86, 31",
theme: {
  buttonColor: "#c4491a",
  buttonGlow: "rgba(224, 86, 31, 0.5)",
  lineColor: "#3aa6b9",
  backHover: "#c4491a",
  castHover: "#e0561f",
  cardHover: "#3aa6b9",
  playHover: "#c4491a",
  cautionColor: "#ff8a4c",
  textColor: "#c9dade",
  castRoleColor: "#7f9ba2",
  titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  heroOverlay: "linear-gradient(to top, rgba(2, 5, 7, 0.95) 0%, rgba(2, 5, 7, 0.35) 40%, transparent 65%)",
  infoBackground: "radial-gradient(ellipse at 50% -10%, rgba(40, 130, 150, 0.35) 0%, transparent 60%), linear-gradient(180deg, #08161b 0%, #020507 100%)",
  castBackground: "linear-gradient(180deg, #020507 0%, #04090c 100%)",
  reviewsBackground: "linear-gradient(180deg, #04090c 0%, #0b2a33 70%, #3a1208 100%)"
},
  hero: "damsel.jpg", poster: "damsel_poster.jpg",
  trailers: [
    { id: "iM150ZWovZM?", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby_6rBH8MgbXWlgBHf85CEFyEoIVO68TAVqksYiB52A&s=10" },
    { id: "xsJZGIpO1lM", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkmDOjOhkjNeDvpz6o9Yu_M49MIus0P3my5ogO-EMYA&s=10" },
    { id: "7fbuEIIIp3g", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV5-e0X92OD13-ZLe2-RgREGGglg__hKgm4Bvs2y1Dg&s=10" }
  ],
  cast: [
    { name: "Millie Bobby Brown", role: "Elodie",              img: milliebobbybrown },
    { name: "Ray Winstone",       role: "Lord Bayford",        img: raywinstone },
    { name: "Angela Bassett",     role: "Queen Isabelle",      img: angelabassett },
    { name: "Nick Robinson",      role: "Prince Henry",        img: nickrobinson },
    { name: "Robin Wright",       role: "Lady Bayford",        img: robinwright },
    { name: "Brooke Carter",      role: "Floria",              img: brookecarter },
    { name: "Shohreh Aghdashloo", role: "The Dragon (voice)",  img: shohrehaghdashloo }
  ]
},



interstellar: {
  title: "Interstellar",
  director: "Christopher Nolan",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  pills: ["2014", "2H 49M", "IMDb 8.7", "PG-13"],
  overview:
    "With Earth's crops failing and humanity running out of time, a former pilot joins a team of explorers sent through a wormhole near Saturn to find a new home for the human race, at the cost of leaving his children behind.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/10YyGXbFtcX5lvKT4iLi0N-CRcXh29fq9/view?usp=sharing",
  accent: "217, 154, 43",
theme: {
  buttonColor: "#b8741a",
  buttonGlow: "rgba(217, 154, 43, 0.45)",
  lineColor: "#d99a2b",
  backHover: "#b8741a",
  castHover: "#d99a2b",
  cardHover: "#d99a2b",
  playHover: "#b8741a",
  cautionColor: "#f0b55a",
  textColor: "#d3e2e6",
  castRoleColor: "#9fb8be",
  titleFont: "'Cormorant Garamond', Georgia, serif",
  heroOverlay: "linear-gradient(to top, rgba(4, 16, 22, 0.9) 0%, rgba(4, 16, 22, 0.3) 40%, transparent 65%)",
  infoBackground: "radial-gradient(ellipse at 50% 120%, rgba(200, 134, 31, 0.35) 0%, transparent 55%), linear-gradient(180deg, #0c3b48 0%, #061a22 100%)",
  castBackground: "linear-gradient(180deg, #061a22 0%, #02090d 100%)",
  reviewsBackground: "linear-gradient(180deg, #02090d 0%, #0a2a33 70%, #3a2a0e 100%)"
},
  hero: "interstellar.jpg", poster: "interstellar_poster.jpg",
  trailers: [
    { id: "zSWdZVtXT7E", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9K6Gag0983qcPjdDTWU_IhEfGKImnOy_BRIC1RW_X0w&s=10" },
    { id: "nyc6RJEEe0U", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVk0-sJMM5QIbCiVm1Psuuf-F5-yRl2i_BuRJM0lGpA&s=10" },
    { id: "u-ElPzExvPA", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzWrkowDUs8AjEkbLmB9bUePungqH7zCml9ZqJnKemA&s" }
  ],
  cast: [
    { name: "Matthew McConaughey", role: "Cooper",           img: matthewmcconaughey },
    { name: "Anne Hathaway",       role: "Dr. Amelia Brand", img: annehathaway },
    { name: "Jessica Chastain",    role: "Murph (adult)",    img: jessicachastain },
    { name: "Michael Caine",       role: "Professor Brand",  img: michaelcaine },
    { name: "Casey Affleck",       role: "Tom (adult)",      img: caseyaffleck },
    { name: "Mackenzie Foy",       role: "Murph (young)",    img: mackenziefoy },
    { name: "Matt Damon",          role: "Dr. Mann",         img: mattdamon2 }
  ]
},

deadpool: {
  title: "Deadpool",
  director: "Tim Miller",
  genres: ["Action", "Comedy", "Adventure"],
  pills: ["2016", "1H 48M", "IMDb 8.0", "R"],
  overview:
    "Wade Wilson, a wisecracking former special-forces mercenary, is left disfigured after a brutal experiment that also gives him accelerated healing. He puts on a red mask, takes the name Deadpool, and sets out to hunt down the man who ruined his life.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/16FBA5GaUS6b86jmHYbuUzhtwxoRJsHbY/view?usp=sharing",

  accent: "200, 16, 46",
  theme: {
    buttonColor: "#c8102e",
    buttonGlow: "rgba(200, 16, 46, 0.5)",
    lineColor: "#c8102e",
    backHover: "#c8102e",
    castHover: "#c8102e",
    cardHover: "#c8102e",
    playHover: "#c8102e",
    cautionColor: "#ff6b3d",
    textColor: "#e8e6e6",
    castRoleColor: "#a8a3a3",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 4, 5, 0.92) 0%, rgba(8, 4, 5, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 30% 110%, rgba(255, 140, 40, 0.28) 0%, transparent 55%), linear-gradient(160deg, #1a0a0d 0%, #070304 100%)",
    castBackground: "linear-gradient(180deg, #070304 0%, #14080b 100%)",
    reviewsBackground: "linear-gradient(180deg, #14080b 0%, #2a0a10 70%, #5a0d18 100%)"
  },

  hero: "deadpool.jpg",             // the wide wallpaper (finger on mask, burning city)
  poster: "deadpool_poster.jpg",    // the tall poster (hands on cheeks, white background)

  trailers: [
    { id: "Xithigfg7dA", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj5wRF261X_CWyVH3kCc2XvqyCqLI3HTUjpS3vD-2aQ&s=10" },
    { id: "Sy8nPI85Ih4", alt: "Trailer Clip 2",   thumb: "https://i.ytimg.com/vi/_KIVsbQgr2w/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDDPRKk4xvaqdt7r89ZmFhLZ-qH-Q" },
    { id: "X-EyQsMQQtE", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXraFYJ-Qrf1rJKSt2Z1bgp4EN6zlNc1dJlEkZE3Uxw&s=10" }
  ],

  cast: [
    { name: "Ryan Reynolds",        role: "Wade Wilson / Deadpool",     img: ryanreynolds },
    { name: "Morena Baccarin",      role: "Vanessa",                    img: morenabaccarin },
    { name: "T.J. Miller",          role: "Weasel",                     img: tjmiller },
    { name: "Ed Skrein",            role: "Francis / Ajax",             img: edskrein },
    { name: "Gina Carano",          role: "Angel Dust",                 img: ginacarano },
    { name: "Brianna Hildebrand",   role: "Negasonic Teenage Warhead",  img: briannahildebrand },
    { name: "Stefan Kapičić",       role: "Colossus (voice)",           img: stefankapicic }
  ]
},

deadpool2: {
  title: "Deadpool 2",
  director: "David Leitch", 
  genres: ["Action", "Comedy", "Adventure"],
  pills: ["2018", "1H 59M", "IMDb 7.6", "R"],
  overview:
    "After a personal tragedy, Wade Wilson forms the X-Force to protect a troubled young mutant from Cable, a brutal time-traveling soldier. Along the way he finds out what it takes to build a family, with plenty of gunfire and bad jokes.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1T7BeA6eHpaDv949IkQpROXtbiU9cjp1r/view?usp=sharing",

  accent: "200, 16, 46",
  theme: {
    buttonColor: "#c8102e",
    buttonGlow: "rgba(200, 16, 46, 0.5)",
    lineColor: "#d9a441",
    backHover: "#c8102e",
    castHover: "#d9a441",
    cardHover: "#d9a441",
    playHover: "#c8102e",
    cautionColor: "#e8b04a",
    textColor: "#d6dde3",
    castRoleColor: "#8f9ba5",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 8, 12, 0.92) 0%, rgba(4, 8, 12, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 30% 40%, rgba(200, 210, 215, 0.14) 0%, transparent 55%), linear-gradient(160deg, #0c1a24 0%, #04070a 100%)",
    castBackground: "linear-gradient(180deg, #04070a 0%, #0a121a 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a121a 0%, #1a0a0f 70%, #4a0d18 100%)"
  },

  hero: "deadpool2.jpg",              // wide wallpaper: Deadpool on the chair with shell casings
  poster: "deadpool2_poster.jpg",     // tall poster: red "2" with Deadpool, Cable and Domino

  trailers: [
    { id: "20bpjtCbCz0", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroZJTXu59f7Ju7XGP8F7-wsaqv6UlgkU-9p3SYXb1wQ&s=10" },
    { id: "E0lW1dWa6Ak", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7IOTvrrFPRhYAzH8nz94n-89BM0rWY_VkxMAKwo7gQ&s=10" },
    { id: "xfrRQnmHDBQ", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HIGZGVNkqH5c3A05J_rEOYopPdpb_kiQa3o_H0VBrQ&s=10" }
  ],

  cast: [
    { name: "Ryan Reynolds",     role: "Wade Wilson / Deadpool",    img: ryanreynolds },
    { name: "Josh Brolin",       role: "Cable",                     img: joshbrolin },
    { name: "Morena Baccarin",   role: "Vanessa",                   img: morenabaccarin },
    { name: "Zazie Beetz",       role: "Domino",                    img: zaziebeetz },
    { name: "T.J. Miller",       role: "Weasel",                    img: tjmiller },
    { name: "Rob Delaney",      role: "Peter",                    img: robdelaney },
    { name: "Julian Dennison",   role: "Russell / Firefist",        img: juliandennison },
    { name: "Brianna Hildebrand", role: "Negasonic Teenage Warhead", img: briannahildebrand },
    { name: "Stefan Kapičić",    role: "Colossus (voice)",          img: stefankapicic }
  ]
},

deadpoolwolverine: {
  title: "Deadpool & Wolverine",
  director: "Shawn Levy",
  genres: ["Action", "Comedy", "Adventure"],
  pills: ["2024", "2H 8M", "IMDb 7.6", "R"],
  overview:
    "A listless Wade Wilson is pulled out of retirement by the Time Variance Authority. To save his world, he must team up with a reluctant, battle-worn Wolverine on a mission that could change the fate of the multiverse.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1OJRuxGry8RXP3AkkNdhRlAqoqRqxgapz/view?usp=sharing",

  accent: "255, 176, 32",
  theme: {
    buttonColor: "#c8102e",
    buttonGlow: "rgba(255, 120, 30, 0.55)",
    lineColor: "#ffb020",
    backHover: "#c8102e",
    castHover: "#ffb020",
    cardHover: "#ffb020",
    playHover: "#c8102e",
    cautionColor: "#ff8a3d",
    textColor: "#ece4dc",
    castRoleColor: "#a89f98",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 5, 4, 0.92) 0%, rgba(10, 5, 4, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 85% 110%, rgba(255, 110, 20, 0.35) 0%, transparent 55%), linear-gradient(160deg, #241613 0%, #0a0605 100%)",
    castBackground: "linear-gradient(180deg, #0a0605 0%, #1a100c 100%)",
    reviewsBackground: "linear-gradient(180deg, #1a100c 0%, #3a1409 70%, #8a2a0c 100%)"
  },

  hero: "deadpool_wolverine.jpg",             // wide wallpaper: fire and smoke background
  poster: "deadpool_wolverine_poster.jpg",    // tall poster: both leaning on the car, white background

  trailers: [
    { id: "73_1biulkYk", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShimJvd8qRSmpR1akTf3VlmgU9PblvFi-xcdQ7fEfROA&s=10" },
    { id: "U82c4bArFJ0", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZf-tj6AY-B2ue3444A2BFGaxG-3yY7EubDza9XfKlvw&s=10" },
    { id: "uUJ-kuzkKQM", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OdT4E7ATlYHA3PtsiBDdIE_xdMfa31UedNuG1khK6A&s=10" }
  ],

  cast: [
    { name: "Ryan Reynolds",    role: "Wade Wilson / Deadpool",   img: ryanreynolds },
    { name: "Hugh Jackman",     role: "Logan / Wolverine",        img: hughjackman },
    { name: "Emma Corrin",      role: "Cassandra Nova",           img: emmacorrin },
    { name: "Matthew Macfadyen", role: "Mr. Paradox",             img: matthewmacfadyen },
    { name: "Rob Delaney",      role: "Peter",                    img: robdelaney },
    { name: "Leslie Uggams",    role: "Blind Al",                 img: leslieuggams },
    { name: "Dafne keen",       role: "Laura",                 img: dafnekeen },
    { name: "Morena Baccarin",  role: "Vanessa",                  img: morenabaccarin },
    { name: "Channing Tatum",  role: "Gambit",                  img: channingtatum },
    { name: "Chris Evans",  role: "Johnny Storm",                  img: chrisevans }
  ]
},



fordvsferrari: {
  title: "Ford vs Ferrari",
  director: "James Mangold",
  genres: ["Sports", "Drama", "History"],
  pills: ["2019", "2H 32M", "IMDb 8.1", "PG-13"],
  overview:
    "American car designer Carroll Shelby and fearless British driver Ken Miles are hired by Ford to build a car that can beat Ferrari at the 24 Hours of Le Mans. They take on corporate meddling and the limits of engineering to chase the greatest race of their lives.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1jLucUhar9zqt0yDcPHkAzH2TMAaC3h8p/view?usp=sharing",

  accent: "210, 75, 70",
  theme: {
    buttonColor: "#c9443f",
    buttonGlow: "rgba(210, 75, 70, 0.5)",
    lineColor: "#78acc6",
    backHover: "#c9443f",
    castHover: "#78acc6",
    cardHover: "#78acc6",
    playHover: "#c9443f",
    cautionColor: "#e8b27a",
    textColor: "#e3e6ea",
    castRoleColor: "#9aa6b0",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 12, 16, 0.92) 0%, rgba(10, 12, 16, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 15% 100%, rgba(232, 160, 80, 0.28) 0%, transparent 55%), linear-gradient(160deg, #1b2530 0%, #0a0d12 100%)",
    castBackground: "linear-gradient(180deg, #0a0d12 0%, #131a22 100%)",
    reviewsBackground: "linear-gradient(180deg, #131a22 0%, #1d2b38 65%, #4a2a1c 100%)"
  },

  hero: "ford_vs_ferrari.jpg",             // wide: sunset, desert hills, the GT40
  poster: "ford_vs_ferrari_poster.jpg",    // tall: red and blue stripes, Damon and Bale

  trailers: [
    { id: "zyYgDtY2AMY", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCoBZRb9TZGE0jZqH2xTCRUF_KhFoJnDviYRdnDkQGw&s=10" },
    { id: "ac8_ds5nLSA", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72AArLL43UT95rnxuD3_XONMO8uvAzMofuBL6Lz-icw&s=10" },
    { id: "7UmSR5vHPGM", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEQt81J-Kofa98yh-bn4gZvuamtkrOB-Bk-qfKeCb7w&s=10" }
  ],

  cast: [
    { name: "Matt Damon",       role: "Carroll Shelby", img: mattdamon },
    { name: "Christian Bale",   role: "Ken Miles",      img: christianbale },
    { name: "Jon Bernthal",     role: "Lee Iacocca",    img: jonbernthal },
    { name: "Caitríona Balfe",  role: "Mollie Miles",   img: caitrionabalfe },
    { name: "Josh Lucas",       role: "Leo Beebe",      img: joshlucas },
    { name: "Noah Jupe",        role: "Peter Miles",    img: noahjupe },
    { name: "Tracy Letts",      role: "Henry Ford II",  img: tracyletts },
    { name: "Remo Girone",      role: "Enzo Ferrari",   img: remogirone }
  ]
},

shazam: {
  title: "Shazam!",
  director: "David F. Sandberg",
  genres: ["Action", "Comedy", "Fantasy"],
  pills: ["2019", "2H 12M", "IMDb 7.0", "PG-13"],
  overview:
    "Fourteen-year-old foster kid Billy Batson is chosen by an ancient wizard and gains the power to turn into a grown-up superhero just by shouting one word. While he tries out his new powers with his foster brother, he has to face Dr. Sivana, a villain hunting for the same magic.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/19J_ifMyjRfszV-9M4FA0AsYLkBa2pjoF/view?usp=sharing",

  accent: "232, 160, 32",
  theme: {
    buttonColor: "#d4321f",
    buttonGlow: "rgba(255, 110, 30, 0.55)",
    lineColor: "#e8a020",
    backHover: "#d4321f",
    castHover: "#e8a020",
    cardHover: "#e8a020",
    playHover: "#d4321f",
    cautionColor: "#ffb23d",
    textColor: "#eadfd2",
    castRoleColor: "#b09a85",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 5, 3, 0.92) 0%, rgba(10, 5, 3, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 40%, rgba(255, 110, 30, 0.25) 0%, transparent 55%), linear-gradient(160deg, #2a170d 0%, #090403 100%)",
    castBackground: "linear-gradient(180deg, #090403 0%, #1a0d07 100%)",
    reviewsBackground: "linear-gradient(180deg, #1a0d07 0%, #3a1608 65%, #7a2a0c 100%)"
  },

  hero: "shazam.jpg",             // wide wallpaper: Shazam with bubblegum, dark brown wall
  poster: "shazam_poster.jpg",    // tall poster: Billy and Shazam sitting on the ledge

  trailers: [
    { id: "go6GEIrcvFY", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8AHS6oEeJhzBUtfV75rDNyCnNqJDNPeVXo9hsyLPTg&s=10" },
    { id: "XJPtjncmIc8", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LMenK2xOMb11r0BevqI2JFBHlAOG6D8KI_KOys_-PA&s=10" },
    { id: "TsvSMUVmwcc", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgahrfbEnGx6uyNA81-NDJaw01fCqFlp2D6BIyZoODQ&s=10" }
  ],

  cast: [
    { name: "Zachary Levi",      role: "Shazam / Billy Batson (adult)", img: zacharylevi },
    { name: "Asher Angel",       role: "Billy Batson",                  img: asherangel },
    { name: "Mark Strong",       role: "Dr. Thaddeus Sivana",           img: markstrong },
    { name: "Jack Dylan Grazer", role: "Freddy Freeman",                img: jackdylangrazer },
    { name: "Djimon Hounsou",    role: "The Wizard",                    img: djimonhounsou },
    { name: "Grace Fulton",      role: "Mary Bromfield",                img: gracefulton },
    { name: "Faithe Herman",     role: "Darla Dudley",                  img: faitheherman },
    { name: "Ian Chen",          role: "Eugene Choi",                   img: ianchen }
  ]
},

bladerunner2049: {
  title: "Blade Runner 2049",
  director: "Denis Villeneuve",
  genres: ["Sci-Fi", "Thriller", "Drama"],
  pills: ["2017", "2H 43M", "IMDb 8.0", "R"],
  overview:
    "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that could plunge what is left of society into chaos. His discovery leads him to track down Rick Deckard, a former blade runner who has been missing for thirty years.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1fgEN1z5H8YWCZ_lpjk_Vf1GcPv_SDdiH/view?usp=sharing",

  accent: "255, 140, 20",
  theme: {
    buttonColor: "#d4561a",
    buttonGlow: "rgba(255, 140, 20, 0.5)",
    lineColor: "#ff8c14",
    backHover: "#d4561a",
    castHover: "#2bb3c9",
    cardHover: "#2bb3c9",
    playHover: "#d4561a",
    cautionColor: "#ffb04a",
    textColor: "#f0e4d4",
    castRoleColor: "#a8a08f",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(30, 10, 2, 0.94) 0%, rgba(30, 10, 2, 0.5) 40%, rgba(30, 10, 2, 0.1) 70%, transparent 100%)",
    infoBackground: "radial-gradient(ellipse at 90% 20%, rgba(43, 179, 201, 0.2) 0%, transparent 50%), linear-gradient(160deg, #3a1a08 0%, #0c0502 100%)",
    castBackground: "linear-gradient(180deg, #0c0502 0%, #0a1a20 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a1a20 0%, #1c1a14 55%, #8a3a0c 100%)"
  },

  hero: "bladerunner2049.jpg",             // wide: figure walking in the orange fog
  poster: "bladerunner2049_poster.jpg",    // tall: orange and teal split, Gosling and Ford

  trailers: [
    { id: "gCcx85zbxz4", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl7CdoEU4qlYFhBZQXfeJeyVh9_dOBX7NPWgZgS9XRA&s" },
    { id: "nGBYEUNKPmo", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2vmjaKGPAetrrR5Y61INsVFBzZ5v8HOcEnuypE_VAw&s=10" },
    { id: "ycdD1exJOEw?", alt: "Trailer Clip 3",   thumb: "https://i.ytimg.com/vi/ycdD1exJOEw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD6MMcA6cf-i9bcUZiX2VWzSeCbDA" }
  ],

  cast: [
    { name: "Ryan Gosling",   role: "Officer K",          img: ryangosling},
    { name: "Harrison Ford",  role: "Rick Deckard",       img: harrisonford },
    { name: "Ana de Armas",   role: "Joi",                img: anadearmas },
    { name: "Jared Leto",     role: "Niander Wallace",    img: jaredleto },
    { name: "Sylvia Hoeks",   role: "Luv",                img: sylviahoeks },
    { name: "Robin Wright",   role: "Lt. Joshi",          img: robinwright },
    { name: "Mackenzie Davis", role: "Mariette",          img: mackenziedavis },
    { name: "Dave Bautista",  role: "Sapper Morton",      img: davebautista }
  ]
},

topgunmaverick: {
  title: "Top Gun: Maverick",
  director: "Joseph Kosinski",
  genres: ["Action", "Drama"],
  pills: ["2022", "2H 10M", "IMDb 8.2", "PG-13"],
  overview:
    "After more than thirty years of service as one of the Navy's top aviators, Pete \"Maverick\" Mitchell is still pushing the envelope as a test pilot. He is called back to train a detachment of elite graduates for a dangerous mission, and has to face the ghosts of his past and the pilot he once lost.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1yBkeI-391AYaDBxk9sHjXgtWho2jq04D/view?usp=sharing",

  accent: "232, 160, 60",
  theme: {
    buttonColor: "#b8641a",
    buttonGlow: "rgba(232, 160, 60, 0.5)",
    lineColor: "#e8a03c",
    backHover: "#b8641a",
    castHover: "#e8a03c",
    cardHover: "#e8a03c",
    playHover: "#b8641a",
    cautionColor: "#f0b25a",
    textColor: "#ece6dc",
    castRoleColor: "#a8a398",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 10, 14, 0.92) 0%, rgba(8, 10, 14, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 20% 100%, rgba(240, 170, 70, 0.28) 0%, transparent 55%), linear-gradient(160deg, #18222f 0%, #080a0e 100%)",
    castBackground: "linear-gradient(180deg, #080a0e 0%, #121a24 100%)",
    reviewsBackground: "linear-gradient(180deg, #121a24 0%, #2a2218 65%, #7a5a2a 100%)"
  },

  hero: "topgunmaverick.jpg",             // wide: jacket back, sunset, jet
  poster: "topgunmaverick_poster.jpg",    // tall: Cruise with the cast collage

  trailers: [
    { id: "giXco2jaZ_4", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7r00XcMCO3fStn2pGFyhs_QBZcFaIlV9U5pMUqPBuw&s=10" },
    { id: "HnnyzPxtzzg", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeUoWHGYLegTLGqWYoBwWm4i9ZZttYhLhhLXGZBZv5w&s=10" },
    { id: "IXbnzEHZDPg", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArUosznILjk4tgMJuvXidxym-ojoD6B9H22XLHIfhNA&s" }
  ],

  cast: [
    { name: "Tom Cruise",      role: "Capt. Pete \"Maverick\" Mitchell",   img: tomcruise },
    { name: "Miles Teller",    role: "Lt. Bradley \"Rooster\" Bradshaw",   img: milesteller },
    { name: "Jennifer Connelly", role: "Penny Benjamin",                   img: jenniferconnelly },
    { name: "Jon Hamm",        role: "Vice Adm. Beau \"Cyclone\" Simpson", img: jonhamm },
    { name: "Glen Powell",     role: "Lt. Jake \"Hangman\" Seresin",       img: glenpowell },
    { name: "Monica Barbaro",  role: "Lt. Natasha \"Phoenix\" Trace",      img: monicabarbaro },
    { name: "Lewis Pullman",   role: "Lt. Robert \"Bob\" Floyd",           img: lewispullman },
    { name: "Ed Harris",       role: "Rear Adm. Chester \"Hammer\" Cain",  img: edharris }
  ]
},


mastersoftheuniverse: {
  title: "Masters of the Universe",
  director: "Travis Knight",
  genres: ["Action", "Fantasy", "Adventure"],
  pills: ["2026", "2H 12M", "IMDb 6.8", "PG-13"],
  overview:
    "Prince Adam must save his family and his world from the evil Skeletor. Teaming up with his closest allies, Teela and Duncan, also known as Man-At-Arms, he embraces his true destiny as He-Man, the most powerful man in the universe.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1Ih2fN6xiVMG2joDVBl_O15fblkmJGXPO/view?usp=sharing",

  accent: "224, 72, 42",
  theme: {
    buttonColor: "#c9381c",
    buttonGlow: "rgba(224, 72, 42, 0.55)",
    lineColor: "#f0a030",
    backHover: "#c9381c",
    castHover: "#4aa8ff",
    cardHover: "#4aa8ff",
    playHover: "#c9381c",
    cautionColor: "#ff9a4a",
    textColor: "#e6dcea",
    castRoleColor: "#a597ae",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 4, 12, 0.93) 0%, rgba(10, 4, 12, 0.35) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 85% 110%, rgba(224, 72, 42, 0.3) 0%, transparent 55%), radial-gradient(ellipse at 10% 0%, rgba(90, 60, 160, 0.25) 0%, transparent 50%), linear-gradient(160deg, #1c0c1c 0%, #08030a 100%)",
    castBackground: "linear-gradient(180deg, #08030a 0%, #160a1a 100%)",
    reviewsBackground: "linear-gradient(180deg, #160a1a 0%, #2a0c14 65%, #6a1a10 100%)"
  },

  hero: "mastersoftheuniverse.jpg",             // wide: He-Man facing Skeletor, embers
  poster: "masteroftheuniverse_poster.jpg",    // tall: He-Man, Teela, Man-At-Arms, skull sky

  trailers: [
    { id: "X21JsHLHnY8", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XoefRiDGRmDV-_H9GJGqa9ESuzqaFM9zCYg1oqNiPw&s=10" },
    { id: "oP5Q1asDpy4", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhETrdm2s6sen9uB8GLYcIy1Z-RiosTlaRr-vZMko-w&s=10" },
    { id: "SyI6xfW3EUo", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5p690pSdI7c70Bwo-Po63UxFN832csZTV1AoxSUQyw&s=10" }
  ],

  cast: [
    { name: "Nicholas Galitzine",   role: "Prince Adam / He-Man",     img: nicholasgalitzine },
    { name: "Camila Mendes",        role: "Teela",                    img: camilamendes },
    { name: "Idris Elba",           role: "Duncan / Man-At-Arms",     img: idriselba },
    { name: "Jared Leto",           role: "Skeletor",                 img: jaredleto2 },
    { name: "Alison Brie",          role: "Evil-Lyn",                 img: alisonbrie },
    { name: "Sam C. Wilson",        role: "Trap Jaw",                 img: samcwilson },
    { name: "Jóhannes Haukur Jóhannesson", role: "Fisto",             img: johanneshaukurjohannesson },
    { name: "Kojo Attah",           role: "Tri-Klops",                img: kojoattah }
  ]
},
manofsteel: {
  title: "Man of Steel",
  director: "Zack Snyder",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2013", "2H 23M", "IMDb 7.1", "PG-13"],
  overview:
    "Raised in rural Kansas, Clark Kent grows up hiding the extraordinary powers he was born with. When he learns he came from the doomed planet Krypton, he must step out of the shadows to face General Zod, who arrives to remake Earth in the image of his lost world.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1fAVtPIBKG8OR_Uds2lwqxAhWsuvHA5uT/view?usp=sharing",

  accent: "168, 20, 31",
  theme: {
    buttonColor: "#a8141f",
    buttonGlow: "rgba(168, 20, 31, 0.55)",
    lineColor: "#7fb2d8",
    backHover: "#a8141f",
    castHover: "#7fb2d8",
    cardHover: "#7fb2d8",
    playHover: "#a8141f",
    cautionColor: "#e08a7a",
    textColor: "#e3e8ec",
    castRoleColor: "#8d9aa5",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(5, 8, 11, 0.94) 0%, rgba(5, 8, 11, 0.55) 40%, rgba(5, 8, 11, 0.15) 70%, transparent 100%)",
    infoBackground: "radial-gradient(ellipse at 20% 100%, rgba(127, 178, 216, 0.2) 0%, transparent 55%), linear-gradient(160deg, #1d252c 0%, #06090c 100%)",
    castBackground: "linear-gradient(180deg, #06090c 0%, #121a21 100%)",
    reviewsBackground: "linear-gradient(180deg, #121a21 0%, #24161a 65%, #5a0f18 100%)"
  },

  hero: "man_of_steel.jpg",
  poster: "man_of_steel_poster.jpg",

  trailers: [
    { id: "T6DJcgm3wNY", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUA_VsekmCHhZilHGMtquFgq1-b4lQilh5ygeNXlgREw&s=10" },
    { id: "KVu3gS7iJu4", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdGC7sO-LNo2DnzMteuV_vr7yqzFgOyZrpL49NuOrUQ&s=10" },
    { id: "76GpM2OVbYo", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQqqDF5e-nEEdXsG3437coz8ZhWKsz1rzLX4TmBkDAQ&s=10" }
  ],

  cast: [
    { name: "Henry Cavill",       role: "Clark Kent / Kal-El", img: henrycavill },
    { name: "Amy Adams",          role: "Lois Lane",           img: amyadams },
    { name: "Michael Shannon",    role: "General Zod",         img: michaelshannon },
    { name: "Kevin Costner",      role: "Jonathan Kent",       img: kevincostner },
    { name: "Diane Lane",         role: "Martha Kent",         img: dianelane },
    { name: "Russell Crowe",      role: "Jor-El",              img: russellcrowe },
    { name: "Laurence Fishburne", role: "Perry White",         img: laurencefishburne },
    { name: "Antje Traue",        role: "Faora-Ul",            img: antjetraue }
  ]
},

superman2025: {
  title: "Superman",
  director: "James Gunn",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2025", "2H 9M", "IMDb 7.1", "PG-13"],
  overview:
    "Superman sets out to reconcile his Kryptonian heritage with the human values of the small-town family that raised him. As he tries to be a symbol of kindness in a cynical world, billionaire Lex Luthor schemes to turn the public and the world against him.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/16dn9tgJh6Vj6AoZCqKupfjc_gagms5Mj/view?usp=sharing",

  accent: "240, 184, 64",
  theme: {
    buttonColor: "#c9232b",
    buttonGlow: "rgba(201, 35, 43, 0.5)",
    lineColor: "#f0b840",
    backHover: "#c9232b",
    castHover: "#5aa9ff",
    cardHover: "#5aa9ff",
    playHover: "#c9232b",
    cautionColor: "#f5c460",
    textColor: "#e2e9f5",
    castRoleColor: "#8ea2c4",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(3, 8, 24, 0.92) 0%, rgba(3, 8, 24, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 85% 110%, rgba(201, 35, 43, 0.28) 0%, transparent 55%), linear-gradient(160deg, #0f2352 0%, #040918 100%)",
    castBackground: "linear-gradient(180deg, #040918 0%, #0a1535 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a1535 0%, #1a1a4a 60%, #6a1a28 100%)"
  },

  hero: "superman_2025.jpg",
  poster: "superman_2025_poster.jpg",

  trailers: [
    { id: "Ox8ZLF6cGM0", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvT9rPG_HqwtuNIUsQFg0v3Qabcpgn085S1Y1Z1YbFNA&s=10" },
    { id: "uhUht6vAsMY", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm-EfXnlA-JgoW5eq2WO4IG1kRP6qCPQiiD_qumjhOA&s=10" },
    { id: "rcPjHgpaG_s", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM3UmJnyn4CLDy0t77hSQiLOsfKbKZtAbM2x_fU7Tiw&s=10" }
  ],

  cast: [
    { name: "David Corenswet",  role: "Clark Kent / Superman",       img: davidcorenswet },
    { name: "Rachel Brosnahan", role: "Lois Lane",                   img: rachelbrosnahan },
    { name: "Nicholas Hoult",   role: "Lex Luthor",                  img: nicholashoult },
    { name: "Edi Gathegi",      role: "Mister Terrific",             img: edigathegi },
    { name: "Anthony Carrigan", role: "Metamorpho",                  img: anthonycarrigan },
    { name: "Nathan Fillion",   role: "Guy Gardner / Green Lantern", img: nathanfillion },
    { name: "Isabela Merced",   role: "Hawkgirl",                    img: isabelamerced },
    { name: "Skyler Gisondo",   role: "Jimmy Olsen",                 img: skylergisondo }
  ]
},


joker: {
  title: "Joker",
  director: "Todd Phillips",
  genres: ["Crime", "Drama", "Thriller"],
  pills: ["2019", "2H 2M", "IMDb 8.4", "R"],
  overview:
    "Arthur Fleck, a failed clown living with his mother in a crumbling Gotham, is ignored and mocked by the city around him. As his life unravels, he slips into madness and becomes the face of a violent uprising.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1b9ckfQ55pKmIFTya1duugbs0ec1WHC6t/view?usp=sharing",

  accent: "200, 16, 46",
  theme: {
    buttonColor: "#b3141b",
    buttonGlow: "rgba(200, 16, 46, 0.55)",
    lineColor: "#d9b43a",
    backHover: "#b3141b",
    castHover: "#2f7fb8",
    cardHover: "#2f7fb8",
    playHover: "#b3141b",
    cautionColor: "#e8c04a",
    textColor: "#e4e2e8",
    castRoleColor: "#9a98a6",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 7, 16, 0.93) 0%, rgba(6, 7, 16, 0.35) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 85% 110%, rgba(200, 16, 46, 0.3) 0%, transparent 55%), linear-gradient(160deg, #141629 0%, #05060d 100%)",
    castBackground: "linear-gradient(180deg, #05060d 0%, #12162a 100%)",
    reviewsBackground: "linear-gradient(180deg, #12162a 0%, #1c1220 60%, #4a0d18 100%)"
  },

  hero: "joker.jpg",
  poster: "joker_poster.jpg",

  trailers: [
    { id: "rgrWXTz_8eU", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ab2yP0Bpi7S-3FxYSdJH6TMnw1rNgkfunBiwegcubA&s=10" },
    { id: "zAGVQLHvwOY", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1NdxiBzYmwTo0188iJWI1_JmjHSkslyJuX8V_-l7hg&s=10" },
    { id: "WbliHNs4q14", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jYoNPAPANYsaormh5Kpty6-khSiKJRIAQTEFyILRRg&s=10" }
  ],

  cast: [
    { name: "Joaquin Phoenix", role: "Arthur Fleck / Joker",  img: joaquinphoenix },
    { name: "Robert De Niro",  role: "Murray Franklin",       img: robertdeniro },
    { name: "Zazie Beetz",     role: "Sophie Dumond",         img: zaziebeetz },
    { name: "Frances Conroy",  role: "Penny Fleck",           img: francesconroy },
    { name: "Brett Cullen",    role: "Thomas Wayne",          img: brettcullen },
    { name: "Shea Whigham",    role: "Detective Burke",       img: sheawhigham },
    { name: "Bill Camp",       role: "Detective Garrity",     img: billcamp },
    { name: "Glenn Fleshler",  role: "Randall",               img: glennfleshler }
  ]
},

thedarkknight: {
  title: "The Dark Knight",
  director: "Christopher Nolan",
  genres: ["Action", "Crime", "Drama"],
  pills: ["2008", "2H 32M", "IMDb 9.0", "PG-13"],
  overview:
    "When the Joker, a criminal mastermind, begins to wreak havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. Together with Lt. Gordon and district attorney Harvey Dent, he sets out to dismantle the city's organized crime.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1CF3fOpS29f7YzwB35xgGt9QYPx5vrcfR/view?usp=sharing",

  accent: "58, 123, 213",
  theme: {
    buttonColor: "#2c5fa8",
    buttonGlow: "rgba(58, 123, 213, 0.55)",
    lineColor: "#f08a24",
    backHover: "#2c5fa8",
    castHover: "#f08a24",
    cardHover: "#f08a24",
    playHover: "#2c5fa8",
    cautionColor: "#f5a04a",
    textColor: "#dde5f0",
    castRoleColor: "#8d9ab0",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(3, 7, 16, 0.94) 0%, rgba(3, 7, 16, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(240, 138, 36, 0.28) 0%, transparent 55%), linear-gradient(160deg, #0e1f3a 0%, #03060d 100%)",
    castBackground: "linear-gradient(180deg, #03060d 0%, #0b1730 100%)",
    reviewsBackground: "linear-gradient(180deg, #0b1730 0%, #14213a 60%, #5a2a0c 100%)"
  },

  hero: "the_dark_knight.jpg",
  poster: "the_dark_knight_poster.jpg",

  trailers: [
    { id: "EXeTwQWrcwY", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a-vuvSYeFpauuba06C9Z-oHH1iSOooZTfQa2GUSAoA&s=10" },
    { id: "kmJLuwP3MbY", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2somi-4uRC_B0mZkw-64v-VOLlTd8lYX-IUPSVMJ9A&s=10" },
    { id: "lNLmk7CPtOw", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfO01t9qpJ-iFv1enp5sAxRpEhLkDnrZewyrnwLWgpQquf-frXwuR_H3vb&s=10" }
  ],

  cast: [
    { name: "Christian Bale",    role: "Bruce Wayne / Batman",  img: christianbale },
    { name: "Heath Ledger",      role: "Joker",                 img: heathledger },
    { name: "Aaron Eckhart",     role: "Harvey Dent / Two-Face", img: aaroneckhart },
    { name: "Michael Caine",     role: "Alfred Pennyworth",     img: michaelcaine },
    { name: "Maggie Gyllenhaal", role: "Rachel Dawes",          img: maggiegyllenhaal },
    { name: "Gary Oldman",       role: "Lt. James Gordon",      img: garyoldman },
    { name: "Morgan Freeman",    role: "Lucius Fox",            img: morganfreeman },
    { name: "Eric Roberts",      role: "Salvatore Maroni",      img: ericroberts }
  ]
},

blackberry: {
  title: "BlackBerry",
  director: "Matt Johnson",
  genres: ["Biography", "Comedy", "Drama"],
  pills: ["2023", "2H 1M", "IMDb 7.5", "R"],
  overview:
    "The rise and fall of the world's first smartphone. Two nerdy dreamers, Mike Lazaridis and Doug Fregin, team up with a ruthless businessman, Jim Balsillie, to turn the BlackBerry into a global phenomenon, until the iPhone changes everything.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/16UtwfNKR2OMVUKf6slq9Zk2XgtjwESDh/view?usp=sharing",

  accent: "0, 170, 190",
  theme: {
    buttonColor: "#0a9fb3",
    buttonGlow: "rgba(0, 190, 210, 0.55)",
    lineColor: "#f0a81c",
    backHover: "#0a9fb3",
    castHover: "#f0a81c",
    cardHover: "#f0a81c",
    playHover: "#0a9fb3",
    cautionColor: "#f0b83c",
    textColor: "#dfeaf0",
    castRoleColor: "#8fa8b4",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 10, 26, 0.94) 0%, rgba(2, 10, 26, 0.35) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(0, 190, 210, 0.3) 0%, transparent 55%), linear-gradient(160deg, #06213a 0%, #020a18 100%)",
    castBackground: "linear-gradient(180deg, #020a18 0%, #082a3c 100%)",
    reviewsBackground: "linear-gradient(180deg, #082a3c 0%, #1c2730 60%, #4a3410 100%)"
  },

  hero: "blackberry.png",
  poster: "blackberry_poster.jpg",

  trailers: [
    { id: "d0oskTqbi0I", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqV2eQ-8sreyQLjFo72VNDkHd9VlkjArYACuga8Z4Pg&s=10" },
    { id: "S1cAlL78NTs", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38jRF_xX6NJe0006Q10fS3-n01b5_FDMh3jToca93Jw&s=10" },
    { id: "DosL_a7V_bQ", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx76AAqN9WnxYF7F_D8CSfhD3uUAsrXw9AzV0ucjjPw&s=10" }
  ],

  cast: [
    { name: "Jay Baruchel",    role: "Mike Lazaridis",  img: jaybaruchel },
    { name: "Glenn Howerton",  role: "Jim Balsillie",   img: glennhowerton },
    { name: "Matt Johnson",    role: "Doug Fregin",     img: mattjohnson },
    { name: "Rich Sommer",     role: "Paul Stannos",    img: richsommer },
    { name: "Michael Ironside", role: "Charles Purdy",  img: michaelironside },
    { name: "Saul Rubinek",    role: "Carl Yankowski",  img: saulrubinek },
    { name: "Cary Elwes",      role: "Rick Brock",      img: caryelwes },
    { name: "SungWon Cho",     role: "Lee",             img: sungwoncho }
  ]
},

luca: {
  title: "Luca",
  director: "Enrico Casarosa",
  genres: ["Animation", "Adventure", "Comedy", "Family"],
  pills: ["2021", "1H 35M", "IMDb 7.4", "PG"],
  overview:
    "On the Italian Riviera, a young boy named Luca spends his days with a new friend, Alberto, exploring the sunny seaside town of Portorosso. But they share a secret: they are sea monsters from another world, hiding beneath the surface.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1d4IMkCNVM9z8ciJLoWgViZU-oPAqDVVa/view?usp=sharing",

  accent: "30, 144, 220",
  theme: {
    buttonColor: "#1b8fd6",
    buttonGlow: "rgba(40, 160, 235, 0.55)",
    lineColor: "#ff7a45",
    backHover: "#1b8fd6",
    castHover: "#2bb39a",
    cardHover: "#ff7a45",
    playHover: "#2bb39a",
    cautionColor: "#ffb347",
    textColor: "#eaf6ff",
    castRoleColor: "#9cc4dd",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 30, 60, 0.92) 0%, rgba(4, 30, 60, 0.3) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(255, 122, 69, 0.26) 0%, transparent 55%), linear-gradient(160deg, #0b4a82 0%, #041c38 100%)",
    castBackground: "linear-gradient(180deg, #041c38 0%, #0a3d6b 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a3d6b 0%, #0e5a7a 60%, #5a2e2a 100%)"
  },

  hero: "luca.jpg",
  poster: "luca_poster.jpg",

  trailers: [
    { id: "mYfJxlgR2jw", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyc_56w92K-SpWTE1xfXupd5oVI_Kzz66z1qSqPtRHyA&s=10" },
    { id: "0hgHY9k-44U", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBwd7lxkfyT0eNj7sNo5mPpjigIx3AWp8hfVJFIicZg&s=10" },
    { id: "BxmSOTHVE8g", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcU8qxs3rOvc2GAvSj8nqCaP0cV9gez4ziwlEW81O0w&s=10" }
  ],

  cast: [
    { name: "Jacob Tremblay",     role: "Luca Paguro (voice)",       img: jacobtremblay },
    { name: "Jack Dylan Grazer",  role: "Alberto Scorfano (voice)",  img: jackdylangrazer },
    { name: "Emma Berman",        role: "Giulia Marcovaldo (voice)", img: emmaberman },
    { name: "Marco Barricelli",   role: "Massimo Marcovaldo (voice)", img: marcobarricelli },
    { name: "Maya Rudolph",       role: "Daniela Paguro (voice)",    img: mayarudolph },
    { name: "Jim Gaffigan",       role: "Lorenzo Paguro (voice)",    img: jimgaffigan },
    { name: "Saverio Raimondo",   role: "Ercole Visconti (voice)",   img: saverioraimondo },
    { name: "Sacha Baron Cohen",  role: "Uncle Ugo (voice)",         img: sachabaroncohen }
  ]
},

thesocialnetwork: {
  title: "The Social Network",
  director: "David Fincher",
  genres: ["Biography", "Drama"],
  pills: ["2010", "2H 0M", "IMDb 7.8", "PG-13"],
  overview:
    "As Harvard student Mark Zuckerberg creates the social networking site that would become Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1uOczrytvN99uuTCy_Fe1ruzqEFopE-Hj/view?usp=sharing",

  accent: "74, 122, 156",
  theme: {
    buttonColor: "#3f6f94",
    buttonGlow: "rgba(74, 122, 156, 0.55)",
    lineColor: "#d9a55a",
    backHover: "#3f6f94",
    castHover: "#d9a55a",
    cardHover: "#d9a55a",
    playHover: "#3f6f94",
    cautionColor: "#e0b36a",
    textColor: "#e3e6e8",
    castRoleColor: "#97a3ab",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 8, 6, 0.94) 0%, rgba(10, 8, 6, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(217, 165, 90, 0.24) 0%, transparent 55%), linear-gradient(160deg, #1a2430 0%, #0a0806 100%)",
    castBackground: "linear-gradient(180deg, #0a0806 0%, #16202a 100%)",
    reviewsBackground: "linear-gradient(180deg, #16202a 0%, #241c14 60%, #4a3418 100%)"
  },

  hero: "thesocialnetwork.jpg",
  poster: "thesocialnetwork_poster.jpg",

  trailers: [
    { id: "lB95KLmpLR4", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi1xAiS9LDlQYrTJ64PDIgEvGLAyqwOOfsPZxB_o1IA&s" },
    { id: "iJCSRxzPfXI", alt: "Trailer Clip 2",   thumb: "https://i.ytimg.com/vi/iipJ4yv0-D4/maxresdefault.jpg" },
    { id: "tjMGuJMIgwM", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8yA6myleIOoBau0iHoBygK5UsILnIUhoN4GOrdrVSA&s=10" }
  ],

  cast: [
    { name: "Jesse Eisenberg",   role: "Mark Zuckerberg",     img: jesseeisenberg },
    { name: "Andrew Garfield",   role: "Eduardo Saverin",     img: andrewgarfield},
    { name: "Justin Timberlake", role: "Sean Parker",         img: justintimberlake },
    { name: "Armie Hammer",      role: "Cameron / Tyler Winklevoss", img: armiehammer },
    { name: "Max Minghella",     role: "Divya Narendra",      img: maxminghella },
    { name: "Rooney Mara",       role: "Erica Albright",      img: rooneymara },
    { name: "Joseph Mazzello",   role: "Dustin Moskovitz",    img: josephmazzello },
    { name: "Brenda Song",       role: "Christy Lee",         img: brendasong }
  ]
},

prisoners: {
  title: "Prisoners",
  director: "Denis Villeneuve",
  genres: ["Crime", "Drama", "Mystery", "Thriller"],
  pills: ["2013", "2H 33M", "IMDb 8.1", "R"],
  overview:
    "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. Detective Loki races against time while Dover's desperation pushes him toward the unthinkable.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/16yi55CdSoj1pU6XX1FbGMZcgpnkXB0Vx/view?usp=sharing",

  accent: "120, 142, 164",
  theme: {
    buttonColor: "#5b6e80",
    buttonGlow: "rgba(130, 152, 174, 0.5)",
    lineColor: "#9fb2c4",
    backHover: "#5b6e80",
    castHover: "#9fb2c4",
    cardHover: "#9fb2c4",
    playHover: "#7d93a8",
    cautionColor: "#c9a86a",
    textColor: "#d6dde3",
    castRoleColor: "#8795a1",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(110, 135, 160, 0.22) 0%, transparent 55%), linear-gradient(160deg, #141c24 0%, #020304 100%)",
    castBackground: "linear-gradient(180deg, #020304 0%, #0f161d 100%)",
    reviewsBackground: "linear-gradient(180deg, #0f161d 0%, #161e26 60%, #26323d 100%)"
  },

  hero: "prisoners.jpg",
  poster: "prisoners_poster.jpg",

  trailers: [
    { id: "bpXfcTF6iVk", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSP0uXi0vPemAmsukWn40RKyVFqRAKy3Ak6h0atd0Jw&s=10" },
    { id: "1kWeHtI63jc", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuyD6HFHt2baOxXyqhYE23EE6Ki0Y5gY69ZL93ofq8g&s=10" },
    { id: "xCyzdQ8kqis", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tCLRiMHMZuP5QiXJ1UzBSQDEdEyRMwQhCPb4s2GkwQ&s=10" }
  ],

  cast: [
    { name: "Hugh Jackman",     role: "Keller Dover",       img: hughjackman },
    { name: "Jake Gyllenhaal",  role: "Detective Loki",     img: jakegyllenhaal },
    { name: "Viola Davis",      role: "Nancy Birch",        img: violadavis },
    { name: "Maria Bello",      role: "Grace Dover",        img: mariabello },
    { name: "Terrence Howard",  role: "Franklin Birch",     img: terrencehoward },
    { name: "Melissa Leo",      role: "Holly Jones",        img: melissaleo },
    { name: "Paul Dano",        role: "Alex Jones",         img: pauldano },
    { name: "Dylan Minnette",   role: "Ralph Dover",        img: dylanminnette }
  ]
},

freeguy: {
  title: "Free Guy",
  director: "Shawn Levy",
  genres: ["Action", "Comedy", "Sci-Fi"],
  pills: ["2021", "1H 55M", "IMDb 7.1", "PG-13"],
  overview:
    "A bank teller named Guy discovers he is actually a background character in an open-world video game. When he decides to become the hero of his own story, he sets out to save his city before the game shuts down for good.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1Og_RD1ZeTN6HSx96O-z55FGKDN4T9Vv8/view?usp=sharing",

  accent: "36, 150, 236",
  theme: {
    buttonColor: "#1f8fe8",
    buttonGlow: "rgba(40, 156, 240, 0.55)",
    lineColor: "#ff8a1f",
    backHover: "#1f8fe8",
    castHover: "#ff8a1f",
    cardHover: "#ff8a1f",
    playHover: "#ff8a1f",
    cautionColor: "#ffb04a",
    textColor: "#eef4fa",
    castRoleColor: "#9db4c8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 16, 32, 0.93) 0%, rgba(6, 16, 32, 0.35) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(255, 138, 31, 0.3) 0%, transparent 55%), linear-gradient(160deg, #0f3a66 0%, #060f1e 100%)",
    castBackground: "linear-gradient(180deg, #060f1e 0%, #0d2a4a 100%)",
    reviewsBackground: "linear-gradient(180deg, #0d2a4a 0%, #1a2f4a 60%, #6a3210 100%)"
  },

  hero: "free_guy.jpg",
  poster: "free_guy_poster.jpg",

  trailers: [
    { id: "X2m-08cOAbc", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zRq1I5uvZqXJWbTtA4OSc9eXU7bujK9Te3QxjTPkug&s=10" },
    { id: "EXp0hNvZog0", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL51JlSOALA6vy3ikUidxX6qmniBGrXoG2F-vyGxGzQ&s=10" },
    { id: "xnCQO-0OIt0", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-4IduPYj50FvWfsItEn6zNZ8VhLnA_ELuWm7x1U6sE2Algve8Jn_orkO&s=10" }
  ],

  cast: [
    { name: "Ryan Reynolds",     role: "Guy",                    img: ryanreynolds },
    { name: "Jodie Comer",       role: "Millie / Molotov Girl",  img: jodiecomer },
    { name: "Joe Keery",         role: "Walter 'Keys' McKeys",   img: joekeery },
    { name: "Lil Rel Howery",    role: "Buddy",                  img: lilrelhowery },
    { name: "Utkarsh Ambudkar",  role: "Mouser",                 img: utkarshambudkar },
    { name: "Taika Waititi",     role: "Antwan",                 img: taikawaititi },
    { name: "Channing Tatum",    role: "Revenjamin Buttons",     img: channingtatum }
  ]
},

thewolfofwallstreet: {
  title: "The Wolf of Wall Street",
  director: "Martin Scorsese",
  genres: ["Biography", "Comedy", "Crime", "Drama"],
  pills: ["2013", "3H 0M", "IMDb 8.2", "R"],
  overview:
    "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1-unv2bI8FkRXRSa64BznQGHoKkCnCD0Z/view?usp=sharing",

  accent: "240, 184, 20",
  theme: {
    buttonColor: "#e5a912",
    buttonGlow: "rgba(244, 190, 30, 0.55)",
    lineColor: "#f4c20d",
    backHover: "#e5a912",
    castHover: "#7d93c4",
    cardHover: "#f4c20d",
    playHover: "#e5a912",
    cautionColor: "#f4c20d",
    textColor: "#e8e8ea",
    castRoleColor: "#9a9ca6",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 9, 14, 0.94) 0%, rgba(8, 9, 14, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(244, 194, 13, 0.24) 0%, transparent 55%), linear-gradient(160deg, #232833 0%, #07080c 100%)",
    castBackground: "linear-gradient(180deg, #07080c 0%, #161a24 100%)",
    reviewsBackground: "linear-gradient(180deg, #161a24 0%, #26241a 60%, #5a4608 100%)"
  },

  hero: "the_wolf_of_wall_street.jpg",
  poster: "the_wolf_of_wall_street_poster.jpg",

  trailers: [
    { id: "iszwuX1AK6A", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXYYRC-e8ySOXXlNICtFtORubov2dH5XenZHG-82bdQ&s=10" },
    { id: "fvLT3q1C7tQ", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxKJUSizyiOIBLLG7N1CtiIAIdW4JlZ3P9nln2QU_MA&s=10" },
    { id: "IAyltL5xo8Q", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Uh95PUCWH5zh5ldPWyKKo02RWzze_hs7v9BK8XPHZw&s=10" }
  ],

  cast: [
    { name: "Leonardo DiCaprio",   role: "Jordan Belfort",     img: leonardodicaprio },
    { name: "Jonah Hill",          role: "Donnie Azoff",       img: jonahhill },
    { name: "Margot Robbie",       role: "Naomi Lapaglia",     img: margotrobbie },
    { name: "Matthew McConaughey", role: "Mark Hanna",         img: matthewmcconaughey },
    { name: "Kyle Chandler",       role: "Agent Patrick Denham", img: kylechandler },
    { name: "Rob Reiner",          role: "Max Belfort",        img: robreiner },
    { name: "Jon Bernthal",        role: "Brad Bodnick",       img: jonbernthal },
    { name: "Jon Favreau",         role: "Manny Riskin",       img: jonfavreau },
    { name: "Jean Dujardin",       role: "Jean-Jacques Saurel", img: jeandujardin }
  ]
},


it: {
  title: "IT",
  director: "Andy Muschietti",
  genres: ["Horror", "Thriller"],
  pills: ["2017", "2H 15M", "IMDb 7.3", "R"],
  overview:
    "In the town of Derry, seven bullied kids who call themselves the Losers' Club band together to face an ancient evil that takes the shape of a dancing clown. As children keep disappearing, they must confront their deepest fears to stop it.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "",

  accent: "214, 28, 44",
  theme: {
    buttonColor: "#c8182b",
    buttonGlow: "rgba(214, 28, 44, 0.6)",
    lineColor: "#f2c81c",
    backHover: "#c8182b",
    castHover: "#f2c81c",
    cardHover: "#f2c81c",
    playHover: "#c8182b",
    cautionColor: "#f2c81c",
    textColor: "#e6e2e2",
    castRoleColor: "#9d9494",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 3, 4, 0.95) 0%, rgba(4, 3, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(214, 28, 44, 0.32) 0%, transparent 55%), linear-gradient(160deg, #1c1114 0%, #050304 100%)",
    castBackground: "linear-gradient(180deg, #050304 0%, #170d10 100%)",
    reviewsBackground: "linear-gradient(180deg, #170d10 0%, #2a0d12 60%, #5c0f18 100%)"
  },

  hero: "it_chapter_1.jpg",
  poster: "it_chapter_1_poster.jpg",

  trailers: [
    { id: "xKJmEC5ieOk", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnCkBiP179rKXGJqx2VepCyqrsu-CfSSJ9XM5EE39Gw&s=10" },
    { id: "FnCdOQsX5kc", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcXzsRDDwJVvRHrMl1nNGcZDekeFTAcy3XP7KBH1jVA&s=10" },
    { id: "WzZjjkcNaLY", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-osr9UrgXZ4ZnjmhsIw-E2BlrurUucpIcG06u9Sa1w&s=10" }
  ],

  cast: [
    { name: "Bill Skarsgård",   role: "Pennywise",          img: billskarsgard },
    { name: "Jaeden Martell",   role: "Bill Denbrough",     img: jaedenmartell },
    { name: "Jeremy Ray Taylor", role: "Ben Hanscom",       img: jeremyraytaylor },
    { name: "Sophia Lillis",    role: "Beverly Marsh",      img: sophialillis },
    { name: "Finn Wolfhard",    role: "Richie Tozier",      img: finnwolfhard },
    { name: "Wyatt Oleff",      role: "Stanley Uris",       img: wyattoleff },
    { name: "Chosen Jacobs",    role: "Mike Hanlon",        img: chosenjacobs },
    { name: "Jack Dylan Grazer", role: "Eddie Kaspbrak",    img: jackdylangrazer }
  ]
},

itchaptertwo: {
  title: "IT Chapter Two",
  director: "Andy Muschietti",
  genres: ["Horror", "Fantasy", "Mystery"],
  pills: ["2019", "2H 49M", "IMDb 6.5", "R"],
  overview:
    "Twenty-seven years after their first battle, the Losers' Club has grown up and moved away. When Mike Hanlon calls them home to Derry, they must face Pennywise once more and finish what they started as children.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1oXp03OS-ma3Ob4y_LZYDyZZr2Jneng_u/view?usp=sharing",

  accent: "226, 24, 24",
  theme: {
    buttonColor: "#d41a1a",
    buttonGlow: "rgba(236, 30, 30, 0.6)",
    lineColor: "#f0a42a",
    backHover: "#d41a1a",
    castHover: "#f0a42a",
    cardHover: "#f0a42a",
    playHover: "#d41a1a",
    cautionColor: "#f4b650",
    textColor: "#f1e8e8",
    castRoleColor: "#c49a9a",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(26, 2, 4, 0.94) 0%, rgba(26, 2, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 164, 42, 0.22) 0%, transparent 55%), linear-gradient(160deg, #5a0709 0%, #120204 100%)",
    castBackground: "linear-gradient(180deg, #120204 0%, #3a0609 100%)",
    reviewsBackground: "linear-gradient(180deg, #3a0609 0%, #5a0a0c 60%, #8a1012 100%)"
  },

  hero: "it_chapter_2.jpg",
  poster: "it_chapter_2_poster.jpg",

  trailers: [
    { id: "bKL1ImsN-DU", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7akZByL-h-t3KnB61dHveu1ytHPL7_f_aUPcCsSzh9g&s=10" },
    { id: "xhJ5P7Up3jA", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYu0w8c93PthFPeuUHjcdS-aKXVKuQMJ22O5wD16nwkg&s=10" },
    { id: "MBphqpK95Zg", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN43sjk2EaKihgT1NolgBxMa60ufqVBCPckfE8awaOmw&s=10" }
  ],

  cast: [
    { name: "Jessica Chastain", role: "Beverly Marsh (adult)",  img: jessicachastain },
    { name: "James McAvoy",     role: "Bill Denbrough (adult)", img: jamesmcavoy },
    { name: "Bill Hader",       role: "Richie Tozier (adult)",  img: billhader },
    { name: "Isaiah Mustafa",   role: "Mike Hanlon (adult)",    img: isaiahmustafa },
    { name: "Jay Ryan",         role: "Ben Hanscom (adult)",    img: jayryan },
    { name: "James Ransone",    role: "Eddie Kaspbrak (adult)", img: jamesransone },
    { name: "Andy Bean",        role: "Stanley Uris (adult)",   img: andybean },
    { name: "Bill Skarsgård",   role: "Pennywise",              img: billskarsgard }
  ]
},

blackwidow: {
  title: "Black Widow",
  director: "Cate Shortland",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2021", "2H 14M", "IMDb 6.7", "PG-13"],
  overview:
    "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, she must reconnect with her old allies, the family she left behind.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1OCb6MYdRyNABR8ss6T7nzZ_UjAKzzjdy/view?usp=sharing",

  accent: "226, 26, 26",
  theme: {
    buttonColor: "#d41a1a",
    buttonGlow: "rgba(236, 30, 30, 0.6)",
    lineColor: "#d9a93c",
    backHover: "#d41a1a",
    castHover: "#d9a93c",
    cardHover: "#d9a93c",
    playHover: "#d41a1a",
    cautionColor: "#e8b94a",
    textColor: "#eeeaea",
    castRoleColor: "#a89a9c",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 2, 3, 0.94) 0%, rgba(8, 2, 3, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(226, 26, 26, 0.32) 0%, transparent 55%), linear-gradient(160deg, #230709 0%, #060203 100%)",
    castBackground: "linear-gradient(180deg, #060203 0%, #1c0709 100%)",
    reviewsBackground: "linear-gradient(180deg, #1c0709 0%, #3a0a0d 60%, #7a1015 100%)"
  },

  hero: "black_widow.jpg",
  poster: "black_widow_poster.jpg",

  trailers: [
    { id: "ybji16u608U", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPH9cR5EL4DT9tBcnQmrXa5EZLBlBxnScTambruyF1Aw&s=10" },
    { id: "Fp9pNPdNwjI", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9ny3GpL2qsW9IPScT6KvE2e1EPlFiSsiIN__HIk7Yw&s=10" },
    { id: "Wz8QAoy_rs8", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtwx5xsUpjGLfb4BxHXKdgPCSvOmW_fqwdKJaak-wGQ&s=10" }
  ],

  cast: [
    { name: "Scarlett Johansson", role: "Natasha Romanoff / Black Widow", img: scarlettjohansson },
    { name: "Florence Pugh",      role: "Yelena Belova",                  img: florencepugh },
    { name: "David Harbour",      role: "Alexei / Red Guardian",          img: davidharbour },
    { name: "Rachel Weisz",       role: "Melina Vostokoff",               img: rachelweisz },
    { name: "O-T Fagbenle",       role: "Mason",                          img: otfagbenle },
    { name: "Olga Kurylenko",     role: "Antonia / Taskmaster",           img: olgakurylenko },
    { name: "Ray Winstone",       role: "Dreykov",                        img: raywinstone },
    { name: "William Hurt",       role: "Thaddeus Ross",                  img: williamhurt }
  ]
},

projecthailmary: {
  title: "Project Hail Mary",
  director: "Phil Lord, Christopher Miller",
  genres: ["Adventure", "Drama", "Sci-Fi"],
  pills: ["2026", "2H 36M", "IMDb —", "PG-13"],
  overview:
    "Science teacher Ryland Grace wakes up alone on a spacecraft with no memory of who he is or why he is there. As his memory returns, he realizes he is humanity's last hope, sent across the galaxy to stop a crisis that threatens Earth, and he is not as alone as he thinks.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1NOlklIpsMbK5ql389xV0I8my_nozNB5S/view?usp=sharing",

  accent: "42, 150, 168",
  theme: {
    buttonColor: "#238a9c",
    buttonGlow: "rgba(48, 170, 190, 0.55)",
    lineColor: "#f2a63a",
    backHover: "#238a9c",
    castHover: "#f2a63a",
    cardHover: "#f2a63a",
    playHover: "#e0502c",
    cautionColor: "#f4b650",
    textColor: "#e2ecf0",
    castRoleColor: "#8fa8b4",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(3, 8, 14, 0.94) 0%, rgba(3, 8, 14, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(242, 166, 58, 0.26) 0%, transparent 55%), linear-gradient(160deg, #0b2a3a 0%, #03070d 100%)",
    castBackground: "linear-gradient(180deg, #03070d 0%, #0a1f2c 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a1f2c 0%, #14283a 60%, #5a3412 100%)"
  },

  hero: "project_hail_mary.jpg",
  poster: "project_hail_mary_poster.jpg",

  trailers: [
    { id: "bPDb2Aml5do", alt: "Official Trailer", thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ax6YdU9xMap7I4il1ecAqsYW_SxMewZcI4RuxRmjKQ&s" },
    { id: "5VYsnngkS_U", alt: "Trailer Clip 2",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckr0I8ZUdwgybWmksxtxOjGvBRfpQasyOYjtI7Q65qA&s=10" },
    { id: "LDD-4aRtc8M", alt: "Trailer Clip 3",   thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ6BYG1BqvnPG2Jl0ZeyljNu49ouLDa0gmKgaMWjL6A&s=10" }
  ],

  cast: [
    { name: "Ryan Gosling",     role: "Ryland Grace",  img: ryangosling },
    { name: "Sandra Hüller",    role: "Eva Stratt",    img: sandrahuller },
    { name: "Lionel Boyce",     role: "DuBois",        img: lionelboyce },
    { name: "Ken Leung",        role: "Yao",           img: kenleung },
    { name: "Milana Vayntrub",  role: "Olesya",        img: milanavayntrub },
    { name: "Priya Kansara",    role: "Xi",            img: priyakansara },
    { name: "James Ortiz",      role: "Rocky (puppeteer)", img: jamesortiz }
  ]
},

ballerina: {
  title: "Ballerina",
  director: "Len Wiseman",
  genres: ["Action", "Crime", "Thriller"],
  pills: ["2025", "2H 5M", "IMDb 7.1", "R"],
  overview:
    "From the world of John Wick. Trained as an assassin in the traditions of the Ruska Roma, Eve Macarro sets out to avenge her father's death. Her hunt for the people behind it leads her through the underworld and into a collision with John Wick himself.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1wuUZhpgjWVp0QwP2DrAInLsF5m6LmO8O/view?usp=sharing",

  accent: "168, 56, 232",
  theme: {
    buttonColor: "#8a2fd6",
    buttonGlow: "rgba(190, 60, 240, 0.6)",
    lineColor: "#ff6a1f",
    backHover: "#8a2fd6",
    castHover: "#ff6a1f",
    cardHover: "#ff6a1f",
    playHover: "#e0359a",
    cautionColor: "#ff9a4a",
    textColor: "#ebe4f4",
    castRoleColor: "#a698bd",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 4, 24, 0.94) 0%, rgba(8, 4, 24, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 90% 110%, rgba(255, 106, 31, 0.26) 0%, transparent 55%), linear-gradient(160deg, #1d0f46 0%, #05030d 100%)",
    castBackground: "linear-gradient(180deg, #05030d 0%, #170c38 100%)",
    reviewsBackground: "linear-gradient(180deg, #170c38 0%, #2a0f3e 60%, #5a1a14 100%)"
  },

  hero: "ballerina.png",
  poster: "ballerina_poster.jpg",

  trailers: [
    {
        id: "EcsDV0rWEFc",
        alt: "Ballerina Official Trailer",
        thumb: "https://img.youtube.com/vi/EcsDV0rWEFc/maxresdefault.jpg"
    },
    {
        id: "yNN2PoilSp4",
        alt: "Ballerina Official New Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3R4c1MBIF4sf5gd8Oh5UFVD-dt2WGh1r8QuI6c34d_g&s=10"
    },
       {
        id: "Xwb4vRrEYLk",
        alt: "Ballerina Official Movie Clip - Staircase",
        thumb: "https://img.youtube.com/vi/Xwb4vRrEYLk/hqdefault.jpg"
    }
],
  cast: [
    { name: "Ana de Armas",          role: "Eve Macarro",      img: anadearmas },
    { name: "Keanu Reeves",          role: "John Wick",        img: keanureeves },
    { name: "Anjelica Huston",       role: "The Director",     img: anjelicahuston },
    { name: "Gabriel Byrne",         role: "The Chancellor",   img: gabrielbyrne },
    { name: "Lance Reddick",         role: "Charon",           img: lancereddick },
    { name: "Ian McShane",           role: "Winston",          img: ianmcshane },
    { name: "Norman Reedus",         role: "Daniel Pine",      img: normanreedus },
    { name: "Catalina Sandino Moreno", role: "Nogi",           img: catalinasandinomoreno }
  ]
},
thunderbolts: {
  title: "Thunderbolts*",
  director: "Jake Schreier",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2025", "2H 6M", "IMDb 7.4", "PG-13"],
  overview:
    "After finding themselves ensnared in a death trap, an unconventional team of antiheroes, Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster and John Walker, must go on a dangerous mission that forces them to confront the darkest corners of their pasts.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1P8DTJOycJOWcP6U_w95zPi7_vRVbqDbQ/view?usp=sharing",

  accent: "244, 196, 18",
  theme: {
    buttonColor: "#f2c20f",
    buttonGlow: "rgba(250, 204, 24, 0.55)",
    lineColor: "#f2c20f",
    backHover: "#f2c20f",
    castHover: "#f2c20f",
    cardHover: "#f2c20f",
    playHover: "#d9a90a",
    cautionColor: "#f7d24a",
    textColor: "#ece8d6",
    castRoleColor: "#a39c78",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 12, 4, 0.94) 0%, rgba(14, 12, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(244, 196, 18, 0.26) 0%, transparent 55%), linear-gradient(160deg, #2a2610 0%, #0b0a04 100%)",
    castBackground: "linear-gradient(180deg, #0b0a04 0%, #1f1c0a 100%)",
    reviewsBackground: "linear-gradient(180deg, #1f1c0a 0%, #2c2810 60%, #5a4a08 100%)"
  },

  hero: "thunderbolts.jpg",
  poster: "thunderbolts_poster.jpg",

  trailers: [
    {
        id: "omaiiD4Vs5M",
        alt: "Thunderbolts Official Teaser Trailer",
        thumb: "https://img.youtube.com/vi/omaiiD4Vs5M/hqdefault.jpg"
    },
    {
        id: "-sAOWhvheK8",
        alt: "Thunderbolts Official Final Trailer",
        thumb: "https://img.youtube.com/vi/-sAOWhvheK8/hqdefault.jpg"
    },
    {
        id: "vZvlQObjL8o",
        alt: "Thunderbolts Movie Clip - Something Wrong",
        thumb: "https://img.youtube.com/vi/vZvlQObjL8o/hqdefault.jpg"
    }
],

  cast: [
    { name: "Florence Pugh",          role: "Yelena Belova",                  img: florencepugh },
    { name: "Sebastian Stan",         role: "Bucky Barnes / Winter Soldier",  img: sebastianstan },
    { name: "David Harbour",          role: "Alexei / Red Guardian",          img: davidharbour },
    { name: "Wyatt Russell",          role: "John Walker / U.S. Agent",       img: wyattrussell },
    { name: "Olga Kurylenko",         role: "Antonia / Taskmaster",           img: olgakurylenko },
    { name: "Lewis Pullman",          role: "Bob / Sentry",                   img: lewispullman },
    { name: "Geraldine Viswanathan",  role: "Mel",                            img: geraldineviswanathan },
    { name: "Julia Louis-Dreyfus",    role: "Valentina Allegra de Fontaine",  img: julialouisdreyfus },
    { name: "Hannah John-Kamen",      role: "Ava / Ghost",                    img: hannahjohnkamen }
  ]
},

predatorbadlands: {
  title: "Predator: Badlands",
  director: "Dan Trachtenberg",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2025", "1H 47M", "IMDb 7.5", "PG-13"],
  overview:
    "Cast out by his own clan, a young Predator named Dek travels to the deadliest planet in the galaxy in search of the ultimate adversary. There he finds an unlikely ally, and together they set out to take down a creature that no one has ever been able to kill.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1WC32zdMJT7wPxv7mk_pwbPYUBzcaquPQ/view?usp=sharing",

  accent: "226, 52, 40",
  theme: {
    buttonColor: "#d42f26",
    buttonGlow: "rgba(236, 60, 46, 0.6)",
    lineColor: "#ff4a3a",
    backHover: "#d42f26",
    castHover: "#5fd35f",
    cardHover: "#5fd35f",
    playHover: "#d42f26",
    cautionColor: "#ff7a5a",
    textColor: "#dde8e8",
    castRoleColor: "#8aa5a6",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 10, 12, 0.95) 0%, rgba(2, 10, 12, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(226, 52, 40, 0.28) 0%, transparent 55%), linear-gradient(160deg, #0f2a2c 0%, #030a0b 100%)",
    castBackground: "linear-gradient(180deg, #030a0b 0%, #0b2022 100%)",
    reviewsBackground: "linear-gradient(180deg, #0b2022 0%, #14282a 60%, #4a1612 100%)"
  },

  hero: "predator_badlands.jpg",
  poster: "predator_badlands_poster.jpg",

 trailers: [
    {
        id: "8NjxYdU7JlM",
        alt: "Predator Badlands Official Teaser",
        thumb: "https://img.youtube.com/vi/8NjxYdU7JlM/hqdefault.jpg"
    },
    {
        id: "43R9l7EkJwE",
        alt: "Predator Badlands Official Trailer",
        thumb: "https://img.youtube.com/vi/43R9l7EkJwE/hqdefault.jpg"
    },
    {
        id: "i8dKccr9OiU",
        alt: "Predator Badlands Movie Clip - Be Brave Brother",
        thumb: "https://img.youtube.com/vi/i8dKccr9OiU/hqdefault.jpg"
    }
],

  cast: [
    { name: "Elle Fanning",                    role: "Thia / Tessa", img: ellefanning },
    { name: "Dimitrius Schuster-Koloamatangi", role: "Dek",          img: dimitriusschusterkoloamatangi }
  ]
},

godzillaminusone: {
  title: "Godzilla Minus One",
  director: "Takashi Yamazaki",
  genres: ["Action", "Drama", "Sci-Fi"],
  pills: ["2023", "2H 4M", "IMDb 7.7", "PG-13"],
  overview:
    "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, mutated and enlarged by nuclear radiation. Shikishima, a former kamikaze pilot haunted by his past, finds himself drawn into the fight to save a country that has nothing left.",
  language: "Dual Audio (Japanese, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1tlLJlpUTb6F4FevUfT7X8_hZYluBGKOi/view?usp=sharing",

  accent: "47, 143, 224",
  theme: {
    buttonColor: "#2b86d4",
    buttonGlow: "rgba(52, 156, 240, 0.6)",
    lineColor: "#ff8a2a",
    backHover: "#2b86d4",
    castHover: "#ff8a2a",
    cardHover: "#ff8a2a",
    playHover: "#ff8a2a",
    cautionColor: "#ffa24a",
    textColor: "#e0e8e8",
    castRoleColor: "#8ea3a6",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 12, 14, 0.94) 0%, rgba(6, 12, 14, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(255, 138, 42, 0.24) 0%, transparent 55%), linear-gradient(160deg, #1b2c30 0%, #060b0d 100%)",
    castBackground: "linear-gradient(180deg, #060b0d 0%, #142226 100%)",
    reviewsBackground: "linear-gradient(180deg, #142226 0%, #1c2a2c 60%, #5a3010 100%)"
  },

  hero: "godzilla_minus_one.jpg",
  poster: "godzilla_minus_one_poster.jpg",

 trailers: [
    {
        id: "YlceGpbGgvE",
        alt: "Godzilla Minus One Official Teaser",
        thumb: "https://img.youtube.com/vi/YlceGpbGgvE/hqdefault.jpg"
    },
    {
        id: "VvSrHIX5a-0",
        alt: "Godzilla Minus One Official Trailer 2",
        thumb: "https://img.youtube.com/vi/VvSrHIX5a-0/hqdefault.jpg"
    },
    {
        id: "jmbQmQ17X3E",
        alt: "Godzilla Minus One Movie Clip - Boat Attack",
        thumb: "https://img.youtube.com/vi/jmbQmQ17X3E/hqdefault.jpg"
    }
],
  cast: [
    { name: "Ryunosuke Kamiki",  role: "Koichi Shikishima",  img: ryunosukekamiki },
    { name: "Minami Hamabe",     role: "Noriko Oishi",       img: minamihamabe },
    { name: "Yuki Yamada",       role: "Shiro Mizushima",    img: yukiyamada },
    { name: "Munetaka Aoki",     role: "Sosaku Tachibana",   img: munetakaaoki },
    { name: "Hidetaka Yoshioka", role: "Kenji Noda",         img: hidetakayoshioka },
    { name: "Sakura Ando",       role: "Sumiko Ota",         img: sakuraando }
  ]
},

spidermanhomecoming: {
  title: "Spider-Man: Homecoming",
  director: "Jon Watts",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2017", "2H 13M", "IMDb 7.4", "PG-13"],
  overview:
    "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter ego Spider-Man. When a new villain, the Vulture, emerges, Peter must prove that he is more than just a friendly neighborhood hero.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1S4Vwy_YWrwSFNgBHYOxVJGYzPSUsTlZI/view?usp=sharing",

  accent: "224, 36, 44",
  theme: {
    buttonColor: "#d8232a",
    buttonGlow: "rgba(236, 44, 52, 0.58)",
    lineColor: "#f5b400",
    backHover: "#d8232a",
    castHover: "#2f7fd6",
    cardHover: "#f5b400",
    playHover: "#2f7fd6",
    cautionColor: "#f7c63a",
    textColor: "#e8eef8",
    castRoleColor: "#9aaccc",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 12, 30, 0.93) 0%, rgba(4, 12, 30, 0.36) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(224, 36, 44, 0.28) 0%, transparent 55%), linear-gradient(160deg, #0f2f66 0%, #040b1c 100%)",
    castBackground: "linear-gradient(180deg, #040b1c 0%, #0b2250 100%)",
    reviewsBackground: "linear-gradient(180deg, #0b2250 0%, #182a52 60%, #6a1418 100%)"
  },

  hero: "spiderman_homecoming.jpg",
  poster: "spiderman_homecoming_poster.jpg",

  trailers: [
    {
        id: "rk-dF1lIbIg",
        alt: "Spider-Man Homecoming Official Trailer",
        thumb: "https://img.youtube.com/vi/rk-dF1lIbIg/hqdefault.jpg"
    },
    {
        id: "39udgGPyYMg",
        alt: "Spider-Man Homecoming Official Trailer 2",
        thumb: "https://img.youtube.com/vi/39udgGPyYMg/hqdefault.jpg"
    },
    {
        id: "dR3cjXncoSk",
        alt: "Spider-Man Homecoming Movie Clip",
        thumb: "https://img.youtube.com/vi/8wNgphPi5VM/hqdefault.jpg"
    }
],

  cast: [
    { name: "Tom Holland",       role: "Peter Parker / Spider-Man",  img: tomholland },
    { name: "Michael Keaton",    role: "Adrian Toomes / Vulture",    img: michaelkeaton },
    { name: "Robert Downey Jr.", role: "Tony Stark / Iron Man",      img: robertdowneyjr },
    { name: "Marisa Tomei",      role: "May Parker",                 img: marisatomei },
    { name: "Zendaya",           role: "Michelle",                   img: zendaya },
    { name: "Jacob Batalon",     role: "Ned Leeds",                  img: jacobbatalon },
    { name: "Jon Favreau",       role: "Happy Hogan",                img: jonfavreau },
    { name: "Tony Revolori",     role: "Flash Thompson",             img: tonyrevolori },
    { name: "Laura Harrier",     role: "Liz Allan",                  img: laurenharrier },
    { name: "Bokeem Woodbine",   role: "Herman Schultz / Shocker",   img: bokeemwoodbine }
  ]
},

bloodshot: {
  title: "Bloodshot",
  director: "Dave Wilson",
  genres: ["Action", "Sci-Fi"],
  pills: ["2020", "1H 49M", "IMDb 5.7", "PG-13"],
  overview:
    "Ray Garrison, a slain soldier, is resurrected by a team of scientists. Infused with nanotechnology, he becomes an unstoppable superhuman, but as his memories fade in and out he must discover who he really is and who made him this way.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1_aGqzcVRey_IomcyP6M72D8TAKtqP8ta/view?usp=sharing",

  accent: "230, 42, 42",
  theme: {
    buttonColor: "#dc2a2a",
    buttonGlow: "rgba(240, 52, 52, 0.62)",
    lineColor: "#ff7a2a",
    backHover: "#dc2a2a",
    castHover: "#ff7a2a",
    cardHover: "#ff7a2a",
    playHover: "#4a78a0",
    cautionColor: "#ff9a4a",
    textColor: "#ece6ea",
    castRoleColor: "#a898a4",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 4, 10, 0.94) 0%, rgba(14, 4, 10, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(230, 42, 42, 0.3) 0%, transparent 55%), linear-gradient(160deg, #35101a 0%, #08040a 100%)",
    castBackground: "linear-gradient(180deg, #08040a 0%, #260c16 100%)",
    reviewsBackground: "linear-gradient(180deg, #260c16 0%, #2a1822 60%, #6a1418 100%)"
  },

  hero: "bloodshot.jpg",
  poster: "bloodshot_poster.jpg",

trailers: [
    {
        id: "7bdaY6BT_Yk",
        alt: "Bloodshot Official Trailer",
        thumb: "https://img.youtube.com/vi/7bdaY6BT_Yk/hqdefault.jpg"
    },
    {
        id: "0R-qIOGyEcw",
        alt: "Bloodshot International Trailer 2",
        thumb: "https://img.youtube.com/vi/0R-qIOGyEcw/hqdefault.jpg"
    },
    {
        id: "3puiKNZf73o",
        alt: "Bloodshot Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRRl4zJNZ0SkF3qkCg9XCzPC-RGQx_Gq1jMXdEEmofA&s=10"
    }
],

  cast: [
    { name: "Vin Diesel",      role: "Ray Garrison / Bloodshot", img: vindiesel },
    { name: "Eiza González",   role: "KT",                       img: eizagonzalez },
    { name: "Sam Heughan",     role: "Jimmy Dalton",             img: samheughan },
    { name: "Toby Kebbell",    role: "Martin Axe",               img: tobykebbell },
    { name: "Guy Pearce",      role: "Dr. Emil Harting",         img: guypearce },
    { name: "Lamorne Morris",  role: "Wilfred Wigans",           img: lamornemorris },
    { name: "Talulah Riley",   role: "Gina",                     img: talulahriley }
  ]
},

thedarkknightrises: {
  title: "The Dark Knight Rises",
  director: "Christopher Nolan",
  genres: ["Action", "Drama", "Thriller"],
  pills: ["2012", "2H 44M", "IMDb 8.4", "PG-13"],
  overview:
    "Eight years after the Joker's reign of chaos, Batman is in exile and Gotham has known peace. But when the masked terrorist Bane arrives and Selina Kyle starts her own game, Bruce Wayne must put on the cowl once more to save the city he loves.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1TxwGXIE7XOqoQqux6RdH9ZDDZsmU7Lkp/view?usp=sharing",

  accent: "236, 108, 28",
  theme: {
    buttonColor: "#e0661a",
    buttonGlow: "rgba(244, 122, 36, 0.6)",
    lineColor: "#f5a742",
    backHover: "#e0661a",
    castHover: "#f5a742",
    cardHover: "#f5a742",
    playHover: "#e0661a",
    cautionColor: "#f7b85a",
    textColor: "#e8e4e0",
    castRoleColor: "#a39a92",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 2, 2, 0.95) 0%, rgba(2, 2, 2, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(236, 108, 28, 0.3) 0%, transparent 55%), linear-gradient(160deg, #241812 0%, #040302 100%)",
    castBackground: "linear-gradient(180deg, #040302 0%, #1a110c 100%)",
    reviewsBackground: "linear-gradient(180deg, #1a110c 0%, #281a10 60%, #5a2a0c 100%)"
  },

  hero: "the_dark_knight_rises.jpg",
  poster: "the_dark_knight_rises_poster.jpg",

 trailers: [
    {
        id: "z5Humz3ONgk",
        alt: "The Dark Knight Rises Official Teaser Trailer",
        thumb: "https://img.youtube.com/vi/z5Humz3ONgk/hqdefault.jpg"
    },
    {
        id: "GokKUqLcvD8",
        alt: "The Dark Knight Rises Official Trailer",
        thumb: "https://img.youtube.com/vi/GokKUqLcvD8/hqdefault.jpg"
    },
    {
        id: "uaT8ipQPmFs",
        alt: "The Dark Knight Rises Movie Clip",
        thumb: "https://img.youtube.com/vi/uaT8ipQPmFs/hqdefault.jpg"
    }
],

  cast: [
    { name: "Christian Bale",         role: "Bruce Wayne / Batman",  img: christianbale },
    { name: "Tom Hardy",              role: "Bane",                  img: tomhardy },
    { name: "Anne Hathaway",          role: "Selina Kyle",           img: annehathaway },
    { name: "Gary Oldman",            role: "Commissioner Gordon",   img: garyoldman },
    { name: "Michael Caine",          role: "Alfred Pennyworth",     img: michaelcaine },
    { name: "Morgan Freeman",         role: "Lucius Fox",            img: morganfreeman },
    { name: "Joseph Gordon-Levitt",   role: "John Blake",            img: josephgordonlevitt },
    { name: "Marion Cotillard",       role: "Miranda Tate",          img: marioncotillard }
  ]
},

johnwick: {
  title: "John Wick",
  director: "Chad Stahelski",
  genres: ["Action", "Crime", "Thriller"],
  pills: ["2014", "1H 41M", "IMDb 7.4", "R"],
  overview:
    "An ex-hitman comes out of retirement to track down the gangsters who took everything from him. With New York City as his bullet-riddled playground, John Wick will not rest until he has avenged the loss of his dog, his car and his peace.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "",

  accent: "36, 170, 160",
  theme: {
    buttonColor: "#1f9e90",
    buttonGlow: "rgba(40, 190, 176, 0.55)",
    lineColor: "#5ad0e0",
    backHover: "#1f9e90",
    castHover: "#5ad0e0",
    cardHover: "#5ad0e0",
    playHover: "#3f7fd0",
    cautionColor: "#8fe0e8",
    textColor: "#dfeaee",
    castRoleColor: "#8aa6b0",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(3, 9, 18, 0.94) 0%, rgba(3, 9, 18, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(36, 170, 160, 0.26) 0%, transparent 55%), linear-gradient(160deg, #0d2a36 0%, #03080e 100%)",
    castBackground: "linear-gradient(180deg, #03080e 0%, #0a1f2c 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a1f2c 0%, #0f2a38 60%, #14424a 100%)"
  },

  hero: "john_wick.jpg",
  poster: "john_wick_poster.jpg",

 trailers: [
    {
        id: "2AUmvWm5ZDQ",
        alt: "John Wick Official Trailer",
        thumb: "https://img.youtube.com/vi/2AUmvWm5ZDQ/hqdefault.jpg"
    },
    {
        id: "G1ahaiEni3E",
        alt: "John Wick Final Trailer - He's Back",
        thumb: "https://img.youtube.com/vi/G1ahaiEni3E/hqdefault.jpg"
    },
    {
        id: "E6mqatQYksY",
        alt: "John Wick Red Circle Club Fight - Movie Clip",
        thumb: "https://img.youtube.com/vi/E6mqatQYksY/hqdefault.jpg"
    }
],

  cast: [
    { name: "Keanu Reeves",      role: "John Wick",       img: keanureeves },
    { name: "Michael Nyqvist",   role: "Viggo Tarasov",   img: michaelnyqvist },
    { name: "Alfie Allen",       role: "Iosef Tarasov",   img: alfieallen },
    { name: "Willem Dafoe",      role: "Marcus",          img: willemdafoe },
    { name: "Dean Winters",      role: "Avi",             img: deanwinters },
    { name: "Adrianne Palicki",  role: "Ms. Perkins",     img: adriannepalicki },
    { name: "Bridget Moynahan",  role: "Helen Wick",      img: bridgetmoynahan },
    { name: "Ian McShane",       role: "Winston",         img: ianmcshane },
    { name: "John Leguizamo",    role: "Aurelio",         img: johnleguizamo }
  ]
},

johnwick2: {
  title: "John Wick: Chapter 2",
  director: "Chad Stahelski",
  genres: ["Action", "Crime", "Thriller"],
  pills: ["2017", "2H 2M", "IMDb 7.4", "R"],
  overview:
    "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life. He must fight his way through the world's most dangerous assassins to survive.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1BTcCUn9FEfjgDd8dU48YXMV8yGg09gPZ/view?usp=sharing",

  accent: "42, 176, 232",
  theme: {
    buttonColor: "#27a8e0",
    buttonGlow: "rgba(46, 184, 240, 0.55)",
    lineColor: "#e83a24",
    backHover: "#27a8e0",
    castHover: "#e83a24",
    cardHover: "#e83a24",
    playHover: "#e83a24",
    cautionColor: "#ff6a4a",
    textColor: "#e6ebf0",
    castRoleColor: "#98a4b2",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 3, 6, 0.95) 0%, rgba(2, 3, 6, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(232, 58, 36, 0.24) 0%, transparent 55%), linear-gradient(160deg, #14182c 0%, #030408 100%)",
    castBackground: "linear-gradient(180deg, #030408 0%, #101428 100%)",
    reviewsBackground: "linear-gradient(180deg, #101428 0%, #1a1a30 60%, #5a1612 100%)"
  },

  hero: "john_wick_2.jpg",
  poster: "john_wick_2_poster.jpg",

 trailers: [
    {
        id: "ChpLV9AMqm4",
        alt: "John Wick Chapter 2 Official Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEVB6lnwRMTbzps9l6aNplIQlmHtK69ZpQKrl32qURQ&s=10"
    },
    {
        id: "nMqETeQrgqU",
        alt: "John Wick Chapter 2 Official Teaser",
        thumb: "https://img.youtube.com/vi/nMqETeQrgqU/hqdefault.jpg"
    },
    {
        id: "Ct-zGV4TgKY",
        alt: "John Wick Chapter 2 - With a Pencil Movie Clip",
        thumb: "https://img.youtube.com/vi/Ct-zGV4TgKY/hqdefault.jpg"
    }
],

  cast: [
    { name: "Keanu Reeves",         role: "John Wick",           img: keanureeves },
    { name: "Riccardo Scamarcio",   role: "Santino D'Antonio",   img: riccardoscamarcio },
    { name: "Ruby Rose",            role: "Ares",                img: rubyrose },
    { name: "Common",               role: "Cassian",             img: common },
    { name: "Laurence Fishburne",   role: "The Bowery King",     img: laurencefishburne },
    { name: "Ian McShane",          role: "Winston",             img: ianmcshane },
    { name: "Lance Reddick",        role: "Charon",              img: lancereddick },
    { name: "Franco Nero",          role: "Julius",              img: franconero },
    { name: "Peter Stormare",       role: "Abram Tarasov",       img: peterstormare },
    { name: "John Leguizamo",       role: "Aurelio",             img: johnleguizamo }
  ]
},

johnwick3: {
  title: "John Wick: Chapter 3 - Parabellum",
  director: "Chad Stahelski",
  genres: ["Action", "Crime", "Thriller"],
  pills: ["2019", "2H 11M", "IMDb 7.4", "R"],
  overview:
    "John Wick is on the run after killing a member of the international assassins' guild, and with a 14 million dollar price tag on his head, he is the target of hit men and women everywhere. He must call in every favor he has left to survive.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1slTUwOKRMMXIqUzGzs5dQphyUfeB8nSi/view?usp=sharing",

  accent: "122, 72, 232",
  theme: {
    buttonColor: "#7240de",
    buttonGlow: "rgba(130, 84, 244, 0.6)",
    lineColor: "#29d3f0",
    backHover: "#7240de",
    castHover: "#ff3f9a",
    cardHover: "#29d3f0",
    playHover: "#ff3f9a",
    cautionColor: "#ff7ab4",
    textColor: "#e8e6f8",
    castRoleColor: "#a39cc8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 3, 22, 0.94) 0%, rgba(6, 3, 22, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(255, 63, 154, 0.26) 0%, transparent 55%), linear-gradient(160deg, #1c1250 0%, #04020e 100%)",
    castBackground: "linear-gradient(180deg, #04020e 0%, #170f46 100%)",
    reviewsBackground: "linear-gradient(180deg, #170f46 0%, #261246 60%, #6a1a4a 100%)"
  },

  hero: "john_wick_3.jpg",
  poster: "john_wick_3_poster.jpg",

 trailers: [
    {
        id: "BrWJ9LG_occ",
        alt: "John Wick Chapter 3 Official Teaser",
        thumb: "https://img.youtube.com/vi/BrWJ9LG_occ/hqdefault.jpg"
    },
    {
        id: "M7XM597XO94",
        alt: "John Wick Chapter 3 Official Trailer",
        thumb: "https://img.youtube.com/vi/M7XM597XO94/hqdefault.jpg"
    },
    {
        id: "Sw4pvbkQ-jk",
        alt: "John Wick Chapter 3 - Horse Stable Fight Movie Clip",
        thumb: "https://img.youtube.com/vi/Sw4pvbkQ-jk/hqdefault.jpg"
    }
],

  cast: [
    { name: "Keanu Reeves",       role: "John Wick",          img: keanureeves },
    { name: "Halle Berry",        role: "Sofia",              img: halleberry },
    { name: "Laurence Fishburne", role: "The Bowery King",    img: laurencefishburne },
    { name: "Mark Dacascos",      role: "Zero",               img: markdacascos },
    { name: "Asia Kate Dillon",   role: "The Adjudicator",    img: asiakatedillon },
    { name: "Lance Reddick",      role: "Charon",             img: lancereddick },
    { name: "Anjelica Huston",    role: "The Director",       img: anjelicahuston },
    { name: "Ian McShane",        role: "Winston",            img: ianmcshane },
    { name: "Jerome Flynn",       role: "Berrada",            img: jeromeflynn }
  ]
},

johnwick4: {
  title: "John Wick: Chapter 4",
  director: "Chad Stahelski",
  genres: ["Action", "Crime", "Thriller"],
  pills: ["2023", "2H 49M", "IMDb 7.7", "R"],
  overview:
    "John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, he must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1M_X7r3ncpm_RcVxq5_xfU0nCF-52muS7/view?usp=sharing",

  accent: "230, 40, 40",
  theme: {
    buttonColor: "#d92626",
    buttonGlow: "rgba(240, 50, 50, 0.6)",
    lineColor: "#f0a830",
    backHover: "#d92626",
    castHover: "#f0a830",
    cardHover: "#f0a830",
    playHover: "#f0a830",
    cautionColor: "#f5bc5a",
    textColor: "#eee6e2",
    castRoleColor: "#ab9a94",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 2, 2, 0.95) 0%, rgba(8, 2, 2, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 168, 48, 0.24) 0%, transparent 55%), linear-gradient(160deg, #2c0a0c 0%, #060203 100%)",
    castBackground: "linear-gradient(180deg, #060203 0%, #240a0c 100%)",
    reviewsBackground: "linear-gradient(180deg, #240a0c 0%, #3a1410 60%, #6a3a0c 100%)"
  },

  hero: "john_wick_4.jpg",
  poster: "john_wick_4_poster.jpg",

trailers: [
    {
        id: "qEVUtrk8_B4",
        alt: "John Wick Chapter 4 Official Trailer",
        thumb: "https://img.youtube.com/vi/qEVUtrk8_B4/hqdefault.jpg"
    },
    {
        id: "yjRHZEUamCc",
        alt: "John Wick Chapter 4 Final Trailer",
        thumb: "https://img.youtube.com/vi/yjRHZEUamCc/hqdefault.jpg"
    },
    {
        id: "RrmfSquUXIA",
        alt: "John Wick Chapter 4 - Stairway to Hell Movie Clip",
        thumb: "https://img.youtube.com/vi/RrmfSquUXIA/hqdefault.jpg"
    }
],

  cast: [
    { name: "Keanu Reeves",       role: "John Wick",              img: keanureeves },
    { name: "Donnie Yen",         role: "Caine",                  img: donnieyen },
    { name: "Bill Skarsgård",     role: "Marquis de Gramont",     img: billskarsgard },
    { name: "Laurence Fishburne", role: "The Bowery King",        img: laurencefishburne },
    { name: "Hiroyuki Sanada",    role: "Shimazu",                img: hiroyukisanada },
    { name: "Shamier Anderson",   role: "Tracker",                img: shamieranderson },
    { name: "Lance Reddick",      role: "Charon",                 img: lancereddick },
    { name: "Rina Sawayama",      role: "Akira",                  img: rinasawayama },
    { name: "Scott Adkins",       role: "Killa",                  img: scottadkins },
    { name: "Ian McShane",        role: "Winston",                img: ianmcshane },
    { name: "Clancy Brown",       role: "Harbinger",              img: clancybrown }
  ]
},

spidermanfarfromhome: {
  title: "Spider-Man: Far From Home",
  director: "Jon Watts",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2019", "2H 9M", "IMDb 7.4", "PG-13"],
  overview:
    "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever. On a school trip across Europe, Peter Parker is recruited by Nick Fury to face a mysterious new hero called Mysterio.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1q4liZl6I0AxPw5Dwo7ySHJr0HLk4ollD/view?usp=sharing",

  accent: "214, 44, 36",
  theme: {
    buttonColor: "#cf2a24",
    buttonGlow: "rgba(228, 52, 44, 0.58)",
    lineColor: "#f0a838",
    backHover: "#cf2a24",
    castHover: "#f0a838",
    cardHover: "#f0a838",
    playHover: "#2b7fb0",
    cautionColor: "#f5bc5a",
    textColor: "#e6ecf2",
    castRoleColor: "#97a8b8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 8, 16, 0.94) 0%, rgba(4, 8, 16, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 168, 56, 0.26) 0%, transparent 55%), linear-gradient(160deg, #0f2a44 0%, #04080f 100%)",
    castBackground: "linear-gradient(180deg, #04080f 0%, #0b1f36 100%)",
    reviewsBackground: "linear-gradient(180deg, #0b1f36 0%, #1a2230 60%, #5a2410 100%)"
  },

  hero: "spiderman_far_from_home.jpg",
  poster: "spiderman_far_from_home_poster.jpg",

trailers: [
    {
        id: "DYYtuKyMtY8",
        alt: "Spider-Man Far From Home Official Teaser Trailer",
        thumb: "https://img.youtube.com/vi/DYYtuKyMtY8/hqdefault.jpg"
    },
    {
        id: "Nt9L1jCKGnE",
        alt: "Spider-Man Far From Home Official Trailer",
        thumb: "https://img.youtube.com/vi/Nt9L1jCKGnE/hqdefault.jpg"
    },
    {
        id: "sC1vPFV-wSE",
        alt: "Spider-Man Far From Home - Molten Man Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-pCpDXqu47cvtCdAxJCqogcrTu5wqczhr19vIknJBg&s=10"
    }
],

  cast: [
    { name: "Tom Holland",       role: "Peter Parker / Spider-Man",   img: tomholland },
    { name: "Samuel L. Jackson", role: "Nick Fury",                   img: samueljackson },
    { name: "Zendaya",           role: "MJ",                          img: zendaya },
    { name: "Cobie Smulders",    role: "Maria Hill",                  img: cobiesmulders },
    { name: "Jon Favreau",       role: "Happy Hogan",                 img: jonfavreau },
    { name: "Marisa Tomei",      role: "May Parker",                  img: marisatomei },
    { name: "Jake Gyllenhaal",   role: "Quentin Beck / Mysterio",     img: jakegyllenhaal },
    { name: "Jacob Batalon",     role: "Ned Leeds",                   img: jacobbatalon },
    { name: "Martin Starr",      role: "Mr. Harrington",              img: martinstarr },
    { name: "J.B. Smoove",       role: "Mr. Dell",                    img: jbsmoove }
  ]
},
rebelmoon1: {
  title: "Rebel Moon - Part One: A Child of Fire",
  director: "Zack Snyder",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2023", "2H 14M", "IMDb 5.6", "PG-13"],
  overview:
    "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1R5HWFD7M950V6ylnQNoKB0Df6F6YZYI8/view?usp=sharing",

  accent: "232, 120, 56",
  theme: {
    buttonColor: "#dc6a2c",
    buttonGlow: "rgba(240, 130, 60, 0.58)",
    lineColor: "#f0c068",
    backHover: "#dc6a2c",
    castHover: "#3aa3a8",
    cardHover: "#f0c068",
    playHover: "#3aa3a8",
    cautionColor: "#f5cc7a",
    textColor: "#efe6dc",
    castRoleColor: "#b0a088",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 8, 6, 0.94) 0%, rgba(14, 8, 6, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(232, 120, 56, 0.28) 0%, transparent 55%), linear-gradient(160deg, #3a1a14 0%, #0a0605 100%)",
    castBackground: "linear-gradient(180deg, #0a0605 0%, #2a1610 100%)",
    reviewsBackground: "linear-gradient(180deg, #2a1610 0%, #2e2216 60%, #6a3a12 100%)"
  },

  hero: "rebelmoon.jpg",
  poster: "rebelmoon_poster.jpg",

trailers: [
    {
        id: "_rHLOXbFZtI",
        alt: "Rebel Moon Part One Official Teaser",
        thumb: "https://img.youtube.com/vi/_rHLOXbFZtI/hqdefault.jpg"
    },
    {
        id: "fhr3MzT6exg",
        alt: "Rebel Moon Part One Official Trailer",
        thumb: "https://img.youtube.com/vi/fhr3MzT6exg/hqdefault.jpg"
    },
    {
        id: "SFvqX1d6CZo",
        alt: "Rebel Moon Part One - Tarak Tames the Bennu Movie Clip",
        thumb: "https://img.youtube.com/vi/SFvqX1d6CZo/hqdefault.jpg"
    }
],

  cast: [
    { name: "Sofia Boutella",   role: "Kora",                 img: sofiaboutella },
    { name: "Charlie Hunnam",   role: "Kai",                  img: charliehunnam },
    { name: "Djimon Hounsou",   role: "Titus",                img: djimonhounsou },
    { name: "Ed Skrein",        role: "Atticus Noble",        img: edskrein },
    { name: "Michiel Huisman",  role: "Gunnar",               img: michielhuisman },
    { name: "Doona Bae",        role: "Nemesis",              img: doonabae },
    { name: "Staz Nair",        role: "Tarak",                img: staznair },
    { name: "Ray Fisher",       role: "Darrian Bloodaxe",     img: rayfisher },
    { name: "Anthony Hopkins",  role: "Jimmy (voice)",        img: anthonyhopkins }
  ]
},

rebelmoon2: {
  title: "Rebel Moon - Part Two: The Scargiver",
  director: "Zack Snyder",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2024", "2H 2M", "IMDb 5.1", "R"],
  overview:
    "The rebels gather on a farming moon as the Imperium closes in. With warriors from across the galaxy at her side, Kora must prepare the villagers for a final stand, while old wounds and secrets from her past come to the surface.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1R5HWFD7M950V6ylnQNoKB0Df6F6YZYI8/view?usp=sharing",

  accent: "230, 84, 52",
  theme: {
    buttonColor: "#d4482a",
    buttonGlow: "rgba(238, 96, 60, 0.6)",
    lineColor: "#ff8a3a",
    backHover: "#d4482a",
    castHover: "#ff8a3a",
    cardHover: "#ff8a3a",
    playHover: "#ff8a3a",
    cautionColor: "#ffa65a",
    textColor: "#ece2dc",
    castRoleColor: "#a8968c",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 6, 4, 0.95) 0%, rgba(14, 6, 4, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(230, 84, 52, 0.3) 0%, transparent 55%), linear-gradient(160deg, #2e1a18 0%, #080403 100%)",
    castBackground: "linear-gradient(180deg, #080403 0%, #241210 100%)",
    reviewsBackground: "linear-gradient(180deg, #241210 0%, #34201a 60%, #6a2410 100%)"
  },

  hero: "rebelmoon2.jpg",
  poster: "rebelmoon2_poster.jpg",

trailers: [
    {
        id: "jzyn4RtV484",
        alt: "Rebel Moon Part Two Official Teaser",
        thumb: "https://img.youtube.com/vi/jzyn4RtV484/hqdefault.jpg"
    },
    {
        id: "UEJuNHOd8Dw",
        alt: "Rebel Moon Part Two Official Trailer",
        thumb: "https://img.youtube.com/vi/UEJuNHOd8Dw/hqdefault.jpg"
    },
    {
        id: "0aVMkb7st8U",
        alt: "Rebel Moon Part Two Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gEe8r0YzYgL7bSHgWgj4KNAS5xy_hfjRCWlo73QQtA&s=10"
    }
],

  cast: [
    { name: "Sofia Boutella",    role: "Kora",              img: sofiaboutella },
    { name: "Charlie Hunnam",    role: "Kai",               img: charliehunnam },
    { name: "Djimon Hounsou",    role: "Titus",             img: djimonhounsou },
    { name: "Ed Skrein",         role: "Atticus Noble",     img: edskrein },
    { name: "Michiel Huisman",   role: "Gunnar",            img: michielhuisman },
    { name: "Doona Bae",         role: "Nemesis",           img: doonabae },
    { name: "Staz Nair",         role: "Tarak",             img: staznair },
    { name: "Cleopatra Coleman", role: "Sam",               img: cleopatracoleman },
    { name: "Stuart Martin",     role: "Aris",              img: stuartmartin }
  ]
},

brucealmighty: {
  title: "Bruce Almighty",
  director: "Tom Shadyac",
  genres: ["Comedy", "Drama", "Fantasy"],
  pills: ["2003", "1H 41M", "IMDb 6.8", "PG-13"],
  overview:
    "Bruce Nolan, a television reporter in Buffalo, complains about God one too many times. God gives him all of His powers for a short time so Bruce can see how hard the job is, and Bruce quickly finds out that being almighty is not as simple as it looks.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1TM_9fVpMS3HMTsHlg3emO2ZJgO-CeJLE/view?usp=sharing",

  accent: "38, 126, 222",
  theme: {
    buttonColor: "#2478d8",
    buttonGlow: "rgba(46, 140, 240, 0.55)",
    lineColor: "#e83a30",
    backHover: "#2478d8",
    castHover: "#e83a30",
    cardHover: "#e83a30",
    playHover: "#e83a30",
    cautionColor: "#ff6a5a",
    textColor: "#eaf2fb",
    castRoleColor: "#9ab4d0",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 22, 52, 0.92) 0%, rgba(6, 22, 52, 0.34) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(232, 58, 48, 0.2) 0%, transparent 55%), linear-gradient(160deg, #0f3a78 0%, #06142c 100%)",
    castBackground: "linear-gradient(180deg, #06142c 0%, #0c2c5c 100%)",
    reviewsBackground: "linear-gradient(180deg, #0c2c5c 0%, #163a6a 60%, #5a2030 100%)"
  },

  hero: "bruce_almighty.jpg",
  poster: "bruce_almighty_poster.jpg",

trailers: [
    {
        id: "fm5JozFXUbM",
        alt: "Bruce Almighty Official Trailer",
        thumb: "https://img.youtube.com/vi/fm5JozFXUbM/hqdefault.jpg"
    },
    {
        id: "JjEm2wjz0K0",
        alt: "Bruce Almighty Trailer 2",
        thumb: "https://img.youtube.com/vi/JjEm2wjz0K0/hqdefault.jpg"
    },
    {
        id: "RL3XbAe4bZs",
        alt: "Bruce Almighty - Bruce Meets God Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wG89KBVGw7yenUdrsyL0PZWtKdZTlckfbUdaA282VQ&s=10"
    }
],

  cast: [
    { name: "Jim Carrey",       role: "Bruce Nolan",     img: jimcarrey },
    { name: "Morgan Freeman",   role: "God",             img: morganfreeman },
    { name: "Jennifer Aniston", role: "Grace Connelly",  img: jenniferaniston },
    { name: "Philip Baker Hall", role: "Jack Baylor",    img: philipbakerhall },
    { name: "Catherine Bell",   role: "Susan Ortega",    img: catherinebell },
    { name: "Lisa Ann Walter",  role: "Debbie",          img: lisaannwalter },
    { name: "Steve Carell",     role: "Evan Baxter",     img: stevecarell },
    { name: "Nora Dunn",        role: "Ally Loman",      img: noradunn },
    { name: "Eddie Jemison",    role: "Eddie",           img: eddiejemison }
  ]
},

spiderman: {
  title: "Spider-Man",
  director: "Sam Raimi",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2002", "2H 1M", "IMDb 7.4", "PG-13"],
  overview:
    "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers. Taking on the identity of Spider-Man, he must face the Green Goblin, a menace who threatens the city and everyone he loves.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1xCHzuACx_GEGsVg34djEDNvRWa8Hfab4/view?usp=sharing",

  accent: "216, 38, 34",
  theme: {
    buttonColor: "#cf2222",
    buttonGlow: "rgba(228, 48, 44, 0.58)",
    lineColor: "#f2b630",
    backHover: "#cf2222",
    castHover: "#2f6fc0",
    cardHover: "#f2b630",
    playHover: "#2f6fc0",
    cautionColor: "#f7c85a",
    textColor: "#efe8e0",
    castRoleColor: "#b0a090",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 8, 4, 0.94) 0%, rgba(14, 8, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(242, 182, 48, 0.28) 0%, transparent 55%), linear-gradient(160deg, #36200c 0%, #0a0604 100%)",
    castBackground: "linear-gradient(180deg, #0a0604 0%, #26160a 100%)",
    reviewsBackground: "linear-gradient(180deg, #26160a 0%, #3a2410 60%, #6a1a14 100%)"
  },

  hero: "spiderman.jpeg",
  poster: "spiderman_poster.jpg",

trailers: [
    {
        id: "nwyO5Ue6JUQ",
        alt: "Spider-Man Official Trailer",
        thumb: "https://img.youtube.com/vi/nwyO5Ue6JUQ/hqdefault.jpg"
    },
    {
        id: "t06RUxPbp_c",
        alt: "Spider-Man Official Trailer 2",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX71836Wo_xehDZaRq_J1zQd26nf8xz8t4KaW5jiJkw&s=10"
    },
    {
        id: "QJaC0uGs-PE",
        alt: "Spider-Man - Green Goblin Fight Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGevOHK1q6jUmUUbK7jYCb9EumQV0oQtSx4RU5Uldpg&s=10"
    }
],

  cast: [
    { name: "Tobey Maguire",     role: "Peter Parker / Spider-Man",  img: tobeymaguire },
    { name: "Willem Dafoe",      role: "Norman Osborn / Green Goblin", img: willemdafoe },
    { name: "Kirsten Dunst",     role: "Mary Jane Watson",           img: kirstendunst },
    { name: "James Franco",      role: "Harry Osborn",               img: jamesfranco },
    { name: "Cliff Robertson",   role: "Ben Parker",                 img: cliffrobertson },
    { name: "Rosemary Harris",   role: "May Parker",                 img: rosemaryharris },
    { name: "J.K. Simmons",      role: "J. Jonah Jameson",           img: jksimmons },
    { name: "Bruce Campbell",    role: "Ring Announcer",             img: brucecampbell }
  ]
},

spiderman2: {
  title: "Spider-Man 2",
  director: "Sam Raimi",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2004", "2H 7M", "IMDb 7.5", "PG-13"],
  overview:
    "Peter Parker is beset with troubles in his failing personal life as he battles a former brilliant scientist, now known as Doctor Octopus. As his powers begin to fade and the people he loves slip away, Peter wonders if he can keep being Spider-Man.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/11Cc_tQCn7HdtnMcDAR94toaWXTBB4hJi/view?usp=sharing",

  accent: "230, 140, 36",
  theme: {
    buttonColor: "#cc2424",
    buttonGlow: "rgba(236, 48, 44, 0.55)",
    lineColor: "#f5a623",
    backHover: "#cc2424",
    castHover: "#c97a2a",
    cardHover: "#f5a623",
    playHover: "#c97a2a",
    cautionColor: "#f7bc5a",
    textColor: "#f0e6da",
    castRoleColor: "#b49a80",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(16, 8, 2, 0.94) 0%, rgba(16, 8, 2, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(245, 166, 35, 0.3) 0%, transparent 55%), linear-gradient(160deg, #3c2208 0%, #0a0502 100%)",
    castBackground: "linear-gradient(180deg, #0a0502 0%, #2c1a08 100%)",
    reviewsBackground: "linear-gradient(180deg, #2c1a08 0%, #402a0e 60%, #7a4a0c 100%)"
  },

  hero: "spiderman2.jpg",
  poster: "spiderman2_poster.jpg",

trailers: [
    {
        id: "Ymuk2yKAY5A",
        alt: "Spider-Man 2 Official Trailer",
        thumb: "https://img.youtube.com/vi/Ymuk2yKAY5A/hqdefault.jpg"
    },
    {
        id: "1s9Yln0YwCw",
        alt: "Spider-Man 2 Second Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdej6Qf3mdyEuhRp7-CzZ3sq2WJraiQT71xsc7iwjYrg&s=10"
    },
    {
        id: "2OPOGUUkauc",
        alt: "Spider-Man 2 - Train Fight Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pRCxurX2ugh35DXLfUjKAiI1ftvJhaKFg_DCGPpvbA&s=10"
    }
],

  cast: [
    { name: "Tobey Maguire",    role: "Peter Parker / Spider-Man",   img: tobeymaguire },
    { name: "Kirsten Dunst",    role: "Mary Jane Watson",            img: kirstendunst },
    { name: "James Franco",     role: "Harry Osborn",                img: jamesfranco },
    { name: "Alfred Molina",    role: "Dr. Otto Octavius / Doc Ock", img: alfredmolina },
    { name: "Rosemary Harris",  role: "May Parker",                  img: rosemaryharris },
    { name: "J.K. Simmons",     role: "J. Jonah Jameson",            img: jksimmons },
    { name: "Donna Murphy",     role: "Rosalie Octavius",            img: donnamurphy },
    { name: "Daniel Gillies",   role: "John Jameson",                img: danielgillies },
    { name: "Dylan Baker",      role: "Dr. Curt Connors",            img: dylanbaker },
    { name: "Elizabeth Banks",  role: "Betty Brant",                 img: elizabethbanks }
  ]
},

spiderman3: {
  title: "Spider-Man 3",
  director: "Sam Raimi",
  genres: ["Action", "Adventure", "Sci-Fi"],
  pills: ["2007", "2H 19M", "IMDb 6.2", "PG-13"],
  overview:
    "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations and revenge. Torn between his two selves, Peter must decide what kind of hero he really wants to be.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1GG4Lf2_QRffEER6Te374tG8DVsFm_DxX/view?usp=sharing",

  accent: "70, 120, 180",
  theme: {
    buttonColor: "#3a6ea5",
    buttonGlow: "rgba(70, 124, 190, 0.55)",
    lineColor: "#c8d0da",
    backHover: "#3a6ea5",
    castHover: "#d02a2a",
    cardHover: "#c8d0da",
    playHover: "#d02a2a",
    cautionColor: "#e0c890",
    textColor: "#e2e8f0",
    castRoleColor: "#8c9aae",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 8, 16, 0.95) 0%, rgba(4, 8, 16, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(208, 42, 42, 0.2) 0%, transparent 55%), linear-gradient(160deg, #14233a 0%, #03060c 100%)",
    castBackground: "linear-gradient(180deg, #03060c 0%, #0f1c30 100%)",
    reviewsBackground: "linear-gradient(180deg, #0f1c30 0%, #1a2436 60%, #4a2a14 100%)"
  },

  hero: "spiderman3.jpg",
  poster: "spiderman3_poster.jpg",

  trailers: [
    {
        id: "e5wUilOeOmg",
        alt: "Spider-Man 3 Official Trailer",
        thumb: "https://img.youtube.com/vi/e5wUilOeOmg/hqdefault.jpg"
    },
    {
        id: "5JgPZaF-MA8",
        alt: "Spider-Man 3 Final Trailer",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo_ct8ah6eV7gXz6UH2Xia3yVF6vbrrFAQj7AnZ2IKw&s=10"
    },
    {
        id: "HTZsyW9um8c",
        alt: "Spider-Man 3 - Black Suit Movie Clip",
        thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv6eYFhtHAgQPia6v9o7bjBIbqV-sQ0gmUh1gx5X-XQ&s=10"
    }
],

  cast: [
    { name: "Tobey Maguire",         role: "Peter Parker / Spider-Man",  img: tobeymaguire },
    { name: "Kirsten Dunst",         role: "Mary Jane Watson",           img: kirstendunst },
    { name: "James Franco",          role: "Harry Osborn / New Goblin",  img: jamesfranco },
    { name: "Thomas Haden Church",   role: "Flint Marko / Sandman",      img: thomashadenchurch },
    { name: "Topher Grace",          role: "Eddie Brock / Venom",        img: tophergrace },
    { name: "Bryce Dallas Howard",   role: "Gwen Stacy",                 img: brycedallashoward },
    { name: "Rosemary Harris",       role: "May Parker",                 img: rosemaryharris },
    { name: "J.K. Simmons",          role: "J. Jonah Jameson",           img: jksimmons },
    { name: "James Cromwell",        role: "Captain Stacy",              img: jamescromwell },
    { name: "Dylan Baker",           role: "Dr. Curt Connors",           img: dylanbaker }
  ]
},
twisters: {
  title: "Twisters",
  director: "Lee Isaac Chung",
  genres: ["Action", "Adventure", "Thriller"],
  pills: ["2024", "2H 2M", "IMDb 6.5", "PG-13"],
  overview:
    "Kate Cooper, a former storm chaser haunted by a devastating encounter with a tornado, is persuaded to return to the open plains of Oklahoma. There she meets Tyler Owens, a charming and reckless social-media superstar, and they find themselves in the paths of multiple converging storm systems.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1mwP7qYAYlSlsZ3rbFC-OdUnwfdzeQM4B/view?usp=sharing",

  accent: "214, 160, 74",
  theme: {
    buttonColor: "#c8903a",
    buttonGlow: "rgba(224, 168, 80, 0.55)",
    lineColor: "#f0c070",
    backHover: "#c8903a",
    castHover: "#6f8fae",
    cardHover: "#f0c070",
    playHover: "#6f8fae",
    cautionColor: "#f5cc80",
    textColor: "#ece6dc",
    castRoleColor: "#a89c88",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 12, 10, 0.94) 0%, rgba(14, 12, 10, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(214, 160, 74, 0.26) 0%, transparent 55%), linear-gradient(160deg, #2e2924 0%, #0a0908 100%)",
    castBackground: "linear-gradient(180deg, #0a0908 0%, #221e1a 100%)",
    reviewsBackground: "linear-gradient(180deg, #221e1a 0%, #2c2a28 60%, #4a3a1c 100%)"
  },

  hero: "twisters.jpg",
  poster: "twisters_poster.jpg",

 trailers: [
    {
        id: "wdok0rZdmx4",
        alt: "Twisters Official Trailer",
        thumb: "https://img.youtube.com/vi/wdok0rZdmx4/hqdefault.jpg"
    },
    {
        id: "Jm27YjLnPHc",
        alt: "Twisters Official Trailer 2",
        thumb: "https://img.youtube.com/vi/Jm27YjLnPHc/hqdefault.jpg"
    },
    {
        id: "B08b-3cEKfw",
        alt: "Twisters - Kate Tells Tyler What Storm To Chase Movie Clip",
        thumb: "https://img.youtube.com/vi/B08b-3cEKfw/hqdefault.jpg"
    }
],

  cast: [
    { name: "Daisy Edgar-Jones", role: "Kate Cooper",    img: daisyedgarjones },
    { name: "Glen Powell",       role: "Tyler Owens",    img: glenpowell },
    { name: "Anthony Ramos",     role: "Javi",           img: anthonyramos },
    { name: "Brandon Perea",     role: "Boone",          img: brandonperea },
    { name: "Maura Tierney",     role: "Cathy",          img: mauratierney },
    { name: "Sasha Lane",        role: "Dani",           img: sashalane },
    { name: "Katy O'Brian",      role: "Tammy",          img: katyobrian },
    { name: "David Corenswet",   role: "Scott",          img: davidcorenswet }
  ]
},

warmachine: {
  title: "War Machine",
  director: "Patrick Hughes",
  genres: ["Action", "Sci-Fi", "War"],
  pills: ["2026", "1H 47M", "IMDb —", "R"],
  overview:
    "During a brutal Army Ranger selection course, a group of recruits and their instructors find themselves hunted by a huge, mysterious war machine from another world. To survive, a determined soldier must lead the group against an enemy that cannot be reasoned with.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/19C_drMcnbrtjWcEvkgoPKit0q1I96FV2/view?usp=sharing",

  accent: "220, 36, 44",
  theme: {
    buttonColor: "#d4202a",
    buttonGlow: "rgba(232, 40, 50, 0.6)",
    lineColor: "#ff3a3a",
    backHover: "#d4202a",
    castHover: "#7a8a56",
    cardHover: "#7a8a56",
    playHover: "#d4202a",
    cautionColor: "#ff6a5a",
    textColor: "#e4e2e2",
    castRoleColor: "#9a9696",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 3, 4, 0.95) 0%, rgba(4, 3, 4, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(220, 36, 44, 0.26) 0%, transparent 55%), linear-gradient(160deg, #1c1416 0%, #040304 100%)",
    castBackground: "linear-gradient(180deg, #040304 0%, #161012 100%)",
    reviewsBackground: "linear-gradient(180deg, #161012 0%, #22181a 60%, #4a1216 100%)"
  },

  hero: "war_machine.jpg",
  poster: "war_machine_poster.jpg",

trailers: [
    {
        id: "AFuE1LRxm80",
        alt: "War Machine Official Trailer - Netflix",
        thumb: "https://img.youtube.com/vi/AFuE1LRxm80/hqdefault.jpg"
    },
    {
        id: "DtFSC5u4dMQ",
        alt: "War Machine Official Trailer - Alternate Upload",
        thumb: "https://img.youtube.com/vi/DtFSC5u4dMQ/hqdefault.jpg"
    },
    {
        id:  "z1aRX-FQg-w",
        alt: "War Machine - Military Squad Awakens a Mech Movie Clip",
        thumb: "https://img.youtube.com/vi/VZrrOaFxASg/hqdefault.jpg"
    }
],

  cast: [
    { name: "Alan Ritchson",   role: "Staff Sergeant 81",          img: alanritchson },
    { name: "Dennis Quaid",    role: "Sergeant Major Sheridan",    img: dennisquaid },
    { name: "Stephan James",   role: "Staff Sergeant 7",           img: stephanjames },
    { name: "Jai Courtney",    role: "Staff Sergeant 81's brother", img: jaicourtney },
    { name: "Esai Morales",    role: "First Sergeant Torres",      img: esaimorales },
    { name: "Keiynan Lonsdale", role: "60",                        img: keiynanlonsdale },
    { name: "Daniel Webber",   role: "57",                         img: danielwebber }
  ]
},

michael: {
  title: "Michael",
  director: "Antoine Fuqua",
  genres: ["Biography", "Drama", "Music"],
  pills: ["2026", "2H 7M", "IMDb —", "PG-13"],
  overview:
    "The story of Michael Jackson's life beyond the music, from the child prodigy of the Jackson 5 to his rise as a solo artist and global icon, and the family, ambition and artistry that shaped the legend.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1nqiIQhH6e-yDR71mKionxkBQE5GlTId7/view?usp=sharing",

  accent: "232, 150, 40",
  theme: {
    buttonColor: "#c8281e",
    buttonGlow: "rgba(224, 52, 40, 0.55)",
    lineColor: "#f0b040",
    backHover: "#c8281e",
    castHover: "#f0b040",
    cardHover: "#f0b040",
    playHover: "#c8281e",
    cautionColor: "#f5c460",
    textColor: "#f0e8dc",
    castRoleColor: "#b09c80",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 8, 4, 0.94) 0%, rgba(14, 8, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 176, 64, 0.28) 0%, transparent 55%), linear-gradient(160deg, #3a2410 0%, #0a0604 100%)",
    castBackground: "linear-gradient(180deg, #0a0604 0%, #2a1a0c 100%)",
    reviewsBackground: "linear-gradient(180deg, #2a1a0c 0%, #3a2410 60%, #6a2a14 100%)"
  },

  hero: "michael.jpg",
  poster: "michael_poster.jpg",

  trailers: [
    {
        id: "mbtgEE6rkxw",
        alt: "Michael Official Trailer",
        thumb: "https://img.youtube.com/vi/mbtgEE6rkxw/hqdefault.jpg"
    },
    {
        id: "k-YAcjaLuSI",
        alt: "Michael Official Final Trailer",
        thumb: "https://img.youtube.com/vi/k-YAcjaLuSI/hqdefault.jpg"
    },

],

  cast: [
    { name: "Jaafar Jackson",      role: "Michael Jackson",       img: jaafarjackson },
    { name: "Colman Domingo",      role: "Joe Jackson",           img: colmandomingo },
    { name: "Nia Long",            role: "Katherine Jackson",     img: nialong },
    { name: "Miles Teller",        role: "John Branca",           img: milesteller },
    { name: "Laura Harrier",       role: "Suzanne de Passe",      img: laurenharrier },
    { name: "Juliano Krue Valdi",  role: "Young Michael",         img: julianokruevaldi },
    { name: "Kat Graham",          role: "Diana Ross",            img: katgraham },
    { name: "Larenz Tate",         role: "Berry Gordy",           img: larenztate }
  ]
},

thefounder: {
  title: "The Founder",
  director: "John Lee Hancock",
  genres: ["Biography", "Drama", "History"],
  pills: ["2016", "1H 55M", "IMDb 7.2", "PG-13"],
  overview:
    "The story of Ray Kroc, a salesman who turned a small California burger stand run by two brothers into the biggest restaurant business in the world, with a combination of ambition, persistence and ruthlessness.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1UZFGPHA_aDhzj8bRBNoL6dyXOAAHm-_J/view?usp=sharing",

  accent: "220, 28, 16",
  theme: {
    buttonColor: "#d81c10",
    buttonGlow: "rgba(232, 40, 24, 0.58)",
    lineColor: "#f5b820",
    backHover: "#d81c10",
    castHover: "#f5b820",
    cardHover: "#f5b820",
    playHover: "#f5b820",
    cautionColor: "#f7ca4a",
    textColor: "#efe8dc",
    castRoleColor: "#a89c84",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 4, 4, 0.94) 0%, rgba(10, 4, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(245, 184, 32, 0.26) 0%, transparent 55%), linear-gradient(160deg, #141428 0%, #05050c 100%)",
    castBackground: "linear-gradient(180deg, #05050c 0%, #10101e 100%)",
    reviewsBackground: "linear-gradient(180deg, #10101e 0%, #2a1010 60%, #6a1410 100%)"
  },

  hero: "the_founder.jpg",
  poster: "the_founder_poster.jpg",

trailers: [
    {
        id: "ksLZEepQ0nA",
        alt: "The Founder Official Trailer",
        thumb: "https://img.youtube.com/vi/ksLZEepQ0nA/hqdefault.jpg"
    },
    {
        id: "VIK9tsiMSd8",
        alt: "The Founder Second Trailer",
        thumb: "https://img.youtube.com/vi/VIK9tsiMSd8/hqdefault.jpg"
    },
    {
        id: "n5uadToINEY",
        alt: "The Founder - Milkshake Movie Clip",
        thumb: "https://img.youtube.com/vi/n5uadToINEY/hqdefault.jpg"
    }
],

  cast: [
    { name: "Michael Keaton",      role: "Ray Kroc",           img: michaelkeaton },
    { name: "Nick Offerman",       role: "Dick McDonald",      img: nickofferman },
    { name: "John Carroll Lynch",  role: "Mac McDonald",       img: johncarrolllynch },
    { name: "Laura Dern",          role: "Ethel Kroc",         img: lauradern },
    { name: "Linda Cardellini",    role: "Joan Smith",         img: lindacardellini },
    { name: "B.J. Novak",          role: "Harry Sonneborn",    img: bjnovak },
    { name: "Patrick Wilson",      role: "Rollie Smith",       img: patrickwilson }
  ]
},

barbie: {
  title: "Barbie",
  director: "Greta Gerwig",
  genres: ["Adventure", "Comedy", "Fantasy"],
  pills: ["2023", "1H 54M", "IMDb 6.8", "PG-13"],
  overview:
    "Barbie suffers a crisis that leads her to question her world and her existence. Leaving the perfect world of Barbie Land, she heads to the real world with Ken to find out what it means to be human.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1B8zq24PGxq4RcJ-Quv3ktpq1noqYBvY0/view?usp=sharing",

  accent: "236, 52, 150",
  theme: {
    buttonColor: "#e0208a",
    buttonGlow: "rgba(244, 60, 160, 0.58)",
    lineColor: "#4cb8f0",
    backHover: "#e0208a",
    castHover: "#4cb8f0",
    cardHover: "#4cb8f0",
    playHover: "#4cb8f0",
    cautionColor: "#ff8ac8",
    textColor: "#fbeaf4",
    castRoleColor: "#d49abc",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(40, 6, 28, 0.92) 0%, rgba(40, 6, 28, 0.34) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(76, 184, 240, 0.22) 0%, transparent 55%), linear-gradient(160deg, #6a1248 0%, #1c0614 100%)",
    castBackground: "linear-gradient(180deg, #1c0614 0%, #4a0e34 100%)",
    reviewsBackground: "linear-gradient(180deg, #4a0e34 0%, #5a1a4a 60%, #1a4a74 100%)"
  },

  hero: "barbie.jpg",
  poster: "barbie_poster.jpg",

trailers: [
    {
        id: "8zIf0XvoL9Y",
        alt: "Barbie Official Teaser Trailer",
        thumb: "https://img.youtube.com/vi/8zIf0XvoL9Y/hqdefault.jpg"
    },
    {
        id: "pBk4NYhWNMM",
        alt: "Barbie Official Main Trailer",
        thumb: "https://img.youtube.com/vi/pBk4NYhWNMM/hqdefault.jpg"
    },
    {
        id: "gvZccmVDl9Y",
        alt: "Barbie - Just Allan Movie Clip",
        thumb: "https://img.youtube.com/vi/gvZccmVDl9Y/hqdefault.jpg"
    }
],

  cast: [
    { name: "Margot Robbie",     role: "Barbie",             img: margotrobbie },
    { name: "Ryan Gosling",      role: "Ken",                img: ryangosling },
    { name: "America Ferrera",   role: "Gloria",             img: americaferrera },
    { name: "Kate McKinnon",     role: "Weird Barbie",       img: katemckinnon },
    { name: "Issa Rae",          role: "President Barbie",   img: issarae },
    { name: "Rhea Perlman",      role: "Ruth Handler",       img: rheaperlman },
    { name: "Will Ferrell",      role: "Mattel CEO",         img: willferrell },
    { name: "Simu Liu",          role: "Ken",                img: simuliu },
    { name: "Kingsley Ben-Adir", role: "Ken",                img: kingsleybenadir },
    { name: "Alexandra Shipp",   role: "Writer Barbie",      img: alexandrashipp },
    { name: "Michael Cera",      role: "Allan",              img: michaelcera }
  ]
},
dungeonsanddragons: {
  title: "Dungeons & Dragons: Honor Among Thieves",
  director: "John Francis Daley, Jonathan Goldstein",
  genres: ["Action", "Adventure", "Comedy", "Fantasy"],
  pills: ["2023", "2H 14M", "IMDb 7.2", "PG-13"],
  overview:
    "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/16pJMF1XXjvOA79zdoqJlNSUy9lWPlEHm/view?usp=sharing",

  accent: "226, 58, 28",
  theme: {
    buttonColor: "#d42a14",
    buttonGlow: "rgba(236, 62, 30, 0.58)",
    lineColor: "#f59a3a",
    backHover: "#d42a14",
    castHover: "#f59a3a",
    cardHover: "#f59a3a",
    playHover: "#f59a3a",
    cautionColor: "#ffb866",
    textColor: "#f6e8de",
    castRoleColor: "#b99884",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(18, 4, 4, 0.94) 0%, rgba(18, 4, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(245, 154, 58, 0.28) 0%, transparent 55%), linear-gradient(160deg, #4a0e0a 0%, #0c0303 100%)",
    castBackground: "linear-gradient(180deg, #0c0303 0%, #2e0a08 100%)",
    reviewsBackground: "linear-gradient(180deg, #2e0a08 0%, #4a1208 60%, #7a2a0c 100%)"
  },

  hero: "dungeons_and_dragons.jpg",
  poster: "dungeons_and_dragons_poster.jpg",

 
trailers: [
  {
    id: "IiMinixSXII",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/IiMinixSXII/hqdefault.jpg"
  },
  {
    id: "HGvv-Hhft3U",
    alt: "New Official Trailer",
    thumb: "https://img.youtube.com/vi/HGvv-Hhft3U/hqdefault.jpg"
  },
  {
    id: "syU2tunI8eA",
    alt: "Let the Games Begin - Movie Clip",
    thumb: "https://img.youtube.com/vi/syU2tunI8eA/hqdefault.jpg"
  }
],

  cast: [
    { name: "Chris Pine",         role: "Edgin Darvis",   img: chrispine },
    { name: "Michelle Rodriguez", role: "Holga Kilgore",  img: michellerodriguez },
    { name: "Regé-Jean Page",     role: "Xenk Yendar",    img: regejeanpage },
    { name: "Justice Smith",      role: "Simon Aumar",    img: justicesmith },
    { name: "Sophia Lillis",      role: "Doric",          img: sophialillis },
    { name: "Hugh Grant",         role: "Forge Fitzwilliam", img: hughgrant },
    { name: "Daisy Head",         role: "Sofina",         img: daisyhead }
  ]
},

sonic: {
  title: "Sonic the Hedgehog",
  director: "Jeff Fowler",
  genres: ["Action", "Adventure", "Comedy", "Family"],
  pills: ["2020", "1H 39M", "IMDb 6.5", "PG"],
  overview:
    "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat the evil genius Dr. Robotnik, who wants to dissect him in order to harness his powers.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1fOOjuXSCtezKp37uIlJ2p3nLlzfWwTPg/view?usp=sharing",

  accent: "34, 112, 240",
  theme: {
    buttonColor: "#1c6ff0",
    buttonGlow: "rgba(40, 120, 255, 0.58)",
    lineColor: "#f5b820",
    backHover: "#1c6ff0",
    castHover: "#f5b820",
    cardHover: "#f5b820",
    playHover: "#e53030",
    cautionColor: "#f7ca4a",
    textColor: "#e8f0fc",
    castRoleColor: "#8aa4c8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 10, 28, 0.93) 0%, rgba(4, 10, 28, 0.36) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(245, 184, 32, 0.22) 0%, transparent 55%), linear-gradient(160deg, #0e2a66 0%, #040a1c 100%)",
    castBackground: "linear-gradient(180deg, #040a1c 0%, #0a1c48 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a1c48 0%, #12307a 60%, #5a1a24 100%)"
  },

  hero: "sonic.jpg",
  poster: "sonic_poster.jpg",


trailers: [
  {
    id: "szby7ZHLnkA",
    alt: "New Official Trailer",
    thumb: "https://img.youtube.com/vi/szby7ZHLnkA/hqdefault.jpg"
  },
  {
    id: "DHR3aHwMe2g",
    alt: "Official Trailer - Paramount Movies",
    thumb: "https://img.youtube.com/vi/DHR3aHwMe2g/hqdefault.jpg"
  },

],

  cast: [
    { name: "Ben Schwartz",     role: "Sonic (voice)",       img: benschwartz },
    { name: "James Marsden",    role: "Tom Wachowski",       img: jamesmarsden },
    { name: "Jim Carrey",       role: "Dr. Robotnik",        img: jimcarrey },
    { name: "Tika Sumpter",     role: "Maddie Wachowski",    img: tikasumpter },
    { name: "Adam Pally",       role: "Wade Whipple",        img: adampally },
    { name: "Natasha Rothwell", role: "Rachel",              img: natasharothwell }
  ]
},

sonic2: {
  title: "Sonic the Hedgehog 2",
  director: "Jeff Fowler",
  genres: ["Action", "Adventure", "Comedy", "Family"],
  pills: ["2022", "2H 2M", "IMDb 6.5", "PG"],
  overview:
    "When the manic Dr. Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails are all that stand in their way on a global journey to find a powerful emerald.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/12CpoZZj337nV3zcxNXtiHSGvqcZkqi4a/view?usp=sharing",

  accent: "40, 110, 235",
  theme: {
    buttonColor: "#2272ee",
    buttonGlow: "rgba(44, 120, 255, 0.58)",
    lineColor: "#f5a830",
    backHover: "#2272ee",
    castHover: "#f5a830",
    cardHover: "#e03a2c",
    playHover: "#e03a2c",
    cautionColor: "#ffc46a",
    textColor: "#eaf0fa",
    castRoleColor: "#92a6c6",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 8, 24, 0.94) 0%, rgba(6, 8, 24, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(245, 168, 48, 0.24) 0%, transparent 55%), linear-gradient(160deg, #10246a 0%, #05061a 100%)",
    castBackground: "linear-gradient(180deg, #05061a 0%, #0c1a52 100%)",
    reviewsBackground: "linear-gradient(180deg, #0c1a52 0%, #3a1440 60%, #8a2418 100%)"
  },

  hero: "sonic_2.jpg",
  poster: "sonic_2_poster.jpg",

 
trailers: [
  {
    id: "G5kzUpWAusI",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/G5kzUpWAusI/hqdefault.jpg"
  },
  {
    id: "47r8FXYZWNU",
    alt: "Final Trailer",
    thumb: "https://img.youtube.com/vi/47r8FXYZWNU/hqdefault.jpg"
  },
  {
    id: "qdJfgKGgHP4",
    alt: "I Make This Look Good - Movie Clip",
    thumb: "https://img.youtube.com/vi/qdJfgKGgHP4/hqdefault.jpg"
  }
],

  cast: [
    { name: "Ben Schwartz",          role: "Sonic (voice)",     img: benschwartz },
    { name: "Idris Elba",            role: "Knuckles (voice)",  img: idriselba },
    { name: "Colleen O'Shaughnessey",role: "Tails (voice)",     img: colleenoshaughnessey },
    { name: "James Marsden",         role: "Tom Wachowski",     img: jamesmarsden },
    { name: "Jim Carrey",            role: "Dr. Robotnik",      img: jimcarrey },
    { name: "Tika Sumpter",          role: "Maddie Wachowski",  img: tikasumpter },
    { name: "Shemar Moore",          role: "Randall",           img: shemarmoore }
  ]
},
arrival: {
  title: "Arrival",
  director: "Denis Villeneuve",
  genres: ["Drama", "Mystery", "Sci-Fi"],
  pills: ["2016", "1H 56M", "IMDb 7.9", "PG-13"],
  overview:
    "A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft land around the world, and must decipher their language before tensions lead to war.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/13-D3ZUw2m96tb2nnP1gweGyNMfzn93lz/view?usp=sharing",

  accent: "120, 150, 170",
  theme: {
    buttonColor: "#4a7a96",
    buttonGlow: "rgba(110, 160, 190, 0.5)",
    lineColor: "#a6bccb",
    backHover: "#4a7a96",
    castHover: "#a6bccb",
    cardHover: "#a6bccb",
    playHover: "#7aa8c4",
    cautionColor: "#bcd0dc",
    textColor: "#e6edf2",
    castRoleColor: "#8a9eac",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 14, 20, 0.94) 0%, rgba(8, 14, 20, 0.42) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(166, 188, 203, 0.2) 0%, transparent 55%), linear-gradient(160deg, #26343e 0%, #080c10 100%)",
    castBackground: "linear-gradient(180deg, #080c10 0%, #18242c 100%)",
    reviewsBackground: "linear-gradient(180deg, #18242c 0%, #2a3c48 60%, #46606e 100%)"
  },

  hero: "arrival.jpg",
  poster: "arrival_poster.jpg",


trailers: [
  {
    id: "tFMo3UJ4B4g",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/tFMo3UJ4B4g/hqdefault.jpg"
  },
  {
    id: "7W1m5ER3I1Y",
    alt: "Final Trailer",
    thumb: "https://img.youtube.com/vi/7W1m5ER3I1Y/hqdefault.jpg"
  },
  {
    id: "zl7eQbGASF0",
    alt: "They Need to See Me - Movie Clip",
    thumb: "https://img.youtube.com/vi/zl7eQbGASF0/hqdefault.jpg"
  }
],

  cast: [
    { name: "Amy Adams",          role: "Louise Banks",      img: amyadams },
    { name: "Jeremy Renner",      role: "Ian Donnelly",      img: jeremyrenner },
    { name: "Forest Whitaker",    role: "Colonel Weber",     img: forestwhitaker },
    { name: "Michael Stuhlbarg",  role: "Agent Halpern",     img: michaelstuhlbarg }
  ]
},

smile: {
  title: "Smile",
  director: "Parker Finn",
  genres: ["Horror", "Mystery", "Thriller"],
  pills: ["2022", "1H 55M", "IMDb 6.5", "R"],
  overview:
    "After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced that an unknown entity is following her, and must confront her past to survive.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1o_7y-RjWWHmf8eq4H0EVW3dKLPPMqR2L/view?usp=sharing",

  accent: "200, 32, 26",
  theme: {
    buttonColor: "#c4201a",
    buttonGlow: "rgba(220, 40, 30, 0.55)",
    lineColor: "#d8782a",
    backHover: "#c4201a",
    castHover: "#d8782a",
    cardHover: "#c4201a",
    playHover: "#e03a2c",
    cautionColor: "#e8924a",
    textColor: "#ece4de",
    castRoleColor: "#a08c80",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 4, 4, 0.95) 0%, rgba(6, 4, 4, 0.45) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(216, 120, 42, 0.2) 0%, transparent 55%), linear-gradient(160deg, #2a1210 0%, #050303 100%)",
    castBackground: "linear-gradient(180deg, #050303 0%, #1a0c0a 100%)",
    reviewsBackground: "linear-gradient(180deg, #1a0c0a 0%, #2e100c 60%, #5a1610 100%)"
  },

  hero: "smile.jpg",
  poster: "smile_poster.jpg",

  
trailers: [
  {
    id: "BcDK7lkzzsU",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/BcDK7lkzzsU/hqdefault.jpg"
  },
  {
    id: "-8d987Wtkxs",
    alt: "Final Trailer",
    thumb: "https://img.youtube.com/vi/-8d987Wtkxs/hqdefault.jpg"
  }
],

  cast: [
    { name: "Sosie Bacon",     role: "Dr. Rose Cotter",         img: sosiebacon },
    { name: "Jessie T. Usher", role: "Trevor",                  img: jessietusher },
    { name: "Kyle Gallner",    role: "Joel",                    img: kylegallner },
    { name: "Caitlin Stasey",  role: "Laura Weaver",            img: caitlinstasey },
    { name: "Kal Penn",        role: "Dr. Morgan Desai",        img: kalpenn },
    { name: "Robin Weigert",   role: "Dr. Madeline Northcott",  img: robinweigert }
  ]
},

ghosted: {
  title: "Ghosted",
  director: "Dexter Fletcher",
  genres: ["Action", "Adventure", "Comedy", "Romance"],
  pills: ["2023", "2H 1M", "IMDb 5.9", "PG-13"],
  overview:
    "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1oPGeEMpY02FQ_41vLHC3ahEdfXhRKztp/view?usp=sharing",

  accent: "232, 100, 32",
  theme: {
    buttonColor: "#e0601c",
    buttonGlow: "rgba(240, 110, 36, 0.58)",
    lineColor: "#f0a060",
    backHover: "#e0601c",
    castHover: "#f0a060",
    cardHover: "#f0a060",
    playHover: "#c46a7e",
    cautionColor: "#f6b47a",
    textColor: "#f6ebe2",
    castRoleColor: "#bb9a84",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(18, 8, 4, 0.94) 0%, rgba(18, 8, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 160, 96, 0.24) 0%, transparent 55%), linear-gradient(160deg, #4a2010 0%, #0c0604 100%)",
    castBackground: "linear-gradient(180deg, #0c0604 0%, #2c1409 100%)",
    reviewsBackground: "linear-gradient(180deg, #2c1409 0%, #4a2010 60%, #6a3040 100%)"
  },

  hero: "ghosted.jpg",
  poster: "ghosted_poster.jpg",


trailers: [
  {
    id: "jCGTRg-T5vE",
    alt: "Official Full Trailer - Skydance",
    thumb: "https://img.youtube.com/vi/jCGTRg-T5vE/hqdefault.jpg"
  },
  {
    id: "SZaF28DrhFg",
    alt: "Official Trailer - Apple TV",
    thumb: "https://img.youtube.com/vi/SZaF28DrhFg/hqdefault.jpg"
  }
],


  cast: [
    { name: "Chris Evans",   role: "Cole Turner",   img: chrisevans },
    { name: "Ana de Armas",  role: "Sadie Rhodes",  img: anadearmas },
    { name: "Adrien Brody",  role: "Leveque",       img: adrienbrody }
  ]
},

sonic3: {
  title: "Sonic the Hedgehog 3",
  director: "Jeff Fowler",
  genres: ["Action", "Adventure", "Comedy", "Family"],
  pills: ["2024", "1H 50M", "IMDb 7.0", "PG"],
  overview:
    "Sonic, Knuckles and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1Z3D-_wSaJLrTu8IEu8pWM_0l2fw-ytt9/view?usp=sharing",

  accent: "52, 110, 238",
  theme: {
    buttonColor: "#2a6cf0",
    buttonGlow: "rgba(50, 120, 255, 0.58)",
    lineColor: "#f5b020",
    backHover: "#2a6cf0",
    castHover: "#f5b020",
    cardHover: "#f05a2a",
    playHover: "#f05a2a",
    cautionColor: "#ffc45a",
    textColor: "#eaeefa",
    castRoleColor: "#9aa6c8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 6, 26, 0.94) 0%, rgba(6, 6, 26, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 90, 42, 0.26) 0%, transparent 55%), linear-gradient(160deg, #141e70 0%, #05051a 100%)",
    castBackground: "linear-gradient(180deg, #05051a 0%, #0e1654 100%)",
    reviewsBackground: "linear-gradient(180deg, #0e1654 0%, #3a1a5a 60%, #8a2a1c 100%)"
  },

  hero: "sonic_3.jpg",
  poster: "sonic_3_poster.jpg",

  
trailers: [
  {
    id: "OSOyFiOiNd4",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/OSOyFiOiNd4/hqdefault.jpg"
  },
  {
    id: "8Ev6_T1ipY0",
    alt: "Official Trailer - Paramount Pictures India",
    thumb: "https://img.youtube.com/vi/8Ev6_T1ipY0/hqdefault.jpg"
  },
  {
    id: "kI7RdKPpPFc",
    alt: "Exclusive Movie Clip",
    thumb: "https://img.youtube.com/vi/kI7RdKPpPFc/hqdefault.jpg"
  }
],

  cast: [
    { name: "Ben Schwartz",           role: "Sonic (voice)",       img: benschwartz },
    { name: "Keanu Reeves",           role: "Shadow (voice)",      img: keanureeves },
    { name: "Idris Elba",             role: "Knuckles (voice)",    img: idriselba },
    { name: "Colleen O'Shaughnessey", role: "Tails (voice)",       img: colleenoshaughnessey },
    { name: "Jim Carrey",             role: "Dr. Robotnik",        img: jimcarrey },
    { name: "James Marsden",          role: "Tom Wachowski",       img: jamesmarsden },
    { name: "Tika Sumpter",           role: "Maddie Wachowski",    img: tikasumpter },
    { name: "Lee Majdoub",            role: "Agent Stone",         img: leemajdoub }
  ]
},

onceuponatimeinhollywood: {
  title: "Once Upon a Time in Hollywood",
  director: "Quentin Tarantino",
  genres: ["Comedy", "Crime", "Drama"],
  pills: ["2019", "2H 41M", "IMDb 7.6", "R"],
  overview:
    "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1xzH4ywzt052I3hRYmphlZ8l9cFhN8EyN/view?usp=sharing",

  accent: "232, 176, 32",
  theme: {
    buttonColor: "#d89a14",
    buttonGlow: "rgba(240, 180, 40, 0.55)",
    lineColor: "#f0c040",
    backHover: "#d89a14",
    castHover: "#f0c040",
    cardHover: "#c8503c",
    playHover: "#c8503c",
    cautionColor: "#f5cf68",
    textColor: "#f4ead8",
    castRoleColor: "#b4a07c",
    buttonTextColor: "#111111",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(14, 10, 4, 0.94) 0%, rgba(14, 10, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 192, 64, 0.26) 0%, transparent 55%), linear-gradient(160deg, #3a2a10 0%, #0a0804 100%)",
    castBackground: "linear-gradient(180deg, #0a0804 0%, #281c0a 100%)",
    reviewsBackground: "linear-gradient(180deg, #281c0a 0%, #3a2a10 60%, #5a2c1c 100%)"
  },

  hero: "onceuponatimeinhollywood.jpg",
  poster: "onceuponatimeinhollywood_poster.jpg",


trailers: [
  {
    id: "Scf8nIJCvs4",
    alt: "Official Teaser Trailer",
    thumb: "https://img.youtube.com/vi/Scf8nIJCvs4/hqdefault.jpg"
  },
  {
    id: "ELeMaP8EPAA",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/ELeMaP8EPAA/hqdefault.jpg"
  },
  {
    id: "q6lCcjv-214",
    alt: "Cliff, Randy, and Rick - Movie Clip",
    thumb: "https://img.youtube.com/vi/q6lCcjv-214/hqdefault.jpg"
  }
],
  cast: [
    { name: "Leonardo DiCaprio",  role: "Rick Dalton",        img: leonardodicaprio },
    { name: "Brad Pitt",          role: "Cliff Booth",        img: bradpitt },
    { name: "Margot Robbie",      role: "Sharon Tate",        img: margotrobbie },
    { name: "Emile Hirsch",       role: "Jay Sebring",        img: emilehirsch },
    { name: "Margaret Qualley",   role: "Pussycat",           img: margaretqualley },
    { name: "Timothy Olyphant",   role: "James Stacy",        img: timothyolyphant },
    { name: "Julia Butters",      role: "Trudi",              img: juliabutters },
    { name: "Austin Butler",      role: "Tex",                img: austinbutler },
    { name: "Dakota Fanning",     role: "Squeaky",            img: dakotafanning },
    { name: "Bruce Dern",         role: "George Spahn",       img: brucedern },
    { name: "Al Pacino",          role: "Marvin Schwarz",     img: alpacino }
  ]
},

theintern: {
  title: "The Intern",
  director: "Nancy Meyers",
  genres: ["Comedy", "Drama"],
  pills: ["2015", "2H 1M", "IMDb 7.1", "PG-13"],
  overview:
    "70-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. He becomes a senior intern at an online fashion site, founded by Jules Ostin, and the two form an unlikely and heartwarming bond.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1WQYm48Wcppf2E09HrohIZbTe7uOFx5bV/view?usp=sharing",

  accent: "200, 32, 42",
  theme: {
    buttonColor: "#c8202a",
    buttonGlow: "rgba(220, 40, 50, 0.5)",
    lineColor: "#8aa2c8",
    backHover: "#c8202a",
    castHover: "#8aa2c8",
    cardHover: "#8aa2c8",
    playHover: "#e03a46",
    cautionColor: "#a8bcd8",
    textColor: "#eeeef2",
    castRoleColor: "#9a9eae",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 10, 16, 0.93) 0%, rgba(10, 10, 16, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(200, 32, 42, 0.2) 0%, transparent 55%), linear-gradient(160deg, #1c2438 0%, #08090e 100%)",
    castBackground: "linear-gradient(180deg, #08090e 0%, #141a2a 100%)",
    reviewsBackground: "linear-gradient(180deg, #141a2a 0%, #1e2842 60%, #4a1a24 100%)"
  },

  hero: "the_intern.jpg",
  poster: "the_intern_poster.jpg",

trailers: [
  {
    id: "ZU3Xban0Y6A",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/ZU3Xban0Y6A/hqdefault.jpg"
  },
  {
    id: "f6dKhzYgksc",
    alt: "Official Trailer 2",
    thumb: "https://img.youtube.com/vi/f6dKhzYgksc/hqdefault.jpg"
  },
  {
    id: "324pojjHOhI",
    alt: "Full Movie Preview",
    thumb: "https://img.youtube.com/vi/324pojjHOhI/hqdefault.jpg"
  }
],

  cast: [
    { name: "Robert De Niro",  role: "Ben Whittaker",  img: robertdeniro },
    { name: "Anne Hathaway",   role: "Jules Ostin",    img: annehathaway },
    { name: "Rene Russo",      role: "Fiona",          img: reneruso },
    { name: "Anders Holm",     role: "Matt",           img: andersholm },
    { name: "Adam DeVine",     role: "Jason",          img: adamdevine },
    { name: "Andrew Rannells", role: "Cameron",        img: andrewrannells }
  ]
},

perksofbeingawallflower: {
  title: "The Perks of Being a Wallflower",
  director: "Stephen Chbosky",
  genres: ["Drama", "Romance"],
  pills: ["2012", "1H 42M", "IMDb 7.8", "PG-13"],
  overview:
    "An introvert freshman is taken under the wings of two seniors who welcome him to the real world, helping him navigate friendship, first love and the pain of his past.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1o7B5IZG0XVtmfTosexwpbQ77YfAc_xbs/view?usp=sharing",

  accent: "160, 204, 32",
  theme: {
    buttonColor: "#9ccc1c",
    buttonGlow: "rgba(168, 220, 40, 0.5)",
    lineColor: "#d8963c",
    backHover: "#9ccc1c",
    castHover: "#d8963c",
    cardHover: "#9ccc1c",
    playHover: "#d8963c",
    cautionColor: "#c4e45a",
    textColor: "#f0f2e4",
    castRoleColor: "#a2a880",
    buttonTextColor: "#111111",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(10, 14, 4, 0.94) 0%, rgba(10, 14, 4, 0.4) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(156, 204, 28, 0.22) 0%, transparent 55%), linear-gradient(160deg, #2c3a10 0%, #080a04 100%)",
    castBackground: "linear-gradient(180deg, #080a04 0%, #1a2408 100%)",
    reviewsBackground: "linear-gradient(180deg, #1a2408 0%, #2c3a10 60%, #5a3a14 100%)"
  },

  hero: "theperksofbeingawallflower.jpg",
  poster: "theperksofbeingawallflower_poster.jpg",



trailers: [
  {
    id: "gLFSzm8Bq38",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/gLFSzm8Bq38/hqdefault.jpg"
  },
  {
    id: "10R4HJFj0JE",
  alt: "Official Trailer",
  thumb: "https://img.youtube.com/vi/10R4HJFj0JE/hqdefault.jpg"
  },
  {
    id: "MmPU9OjE2X8",
    alt: "You're a Wallflower - Movie Clip",
    thumb: "https://img.youtube.com/vi/MmPU9OjE2X8/hqdefault.jpg"
  }
],

  cast: [
    { name: "Logan Lerman",     role: "Charlie",             img: loganlerman },
    { name: "Emma Watson",      role: "Sam",                 img: emmawatson },
    { name: "Ezra Miller",      role: "Patrick",             img: ezramiller },
    { name: "Mae Whitman",      role: "Mary Elizabeth",      img: maewhitman },
    { name: "Kate Walsh",       role: "Charlie's Mom",       img: katewalsh },
    { name: "Dylan McDermott",  role: "Charlie's Dad",       img: dylanmcdermott },
    { name: "Paul Rudd",        role: "Mr. Anderson",        img: paulrudd },
    { name: "Nina Dobrev",      role: "Candace",             img: ninadobrev }
  ]
},
};
