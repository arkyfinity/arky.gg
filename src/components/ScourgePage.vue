<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    const armoryEmbed = document.createElement('script');
    armoryEmbed.setAttribute('src', 'https://unpkg.com/armory-embeds@^0.4.3/armory-embeds.js');
    document.head.appendChild(armoryEmbed);
});

onUnmounted(() => {
    const scriptTag = document.querySelector('script[src="https://unpkg.com/armory-embeds@^0.4.3/armory-embeds.js"]');
    if (scriptTag) document.head.removeChild(scriptTag);
});
</script>

<template>
    <div class="build-wrapper">
        <p>The core of this build lies in triggering <span data-armory-embed="items" data-armory-ids="24548" data-armory-size="25" data-armory-inline-text="wiki"></span> on each weapon set to remove Aegis to soften up your enemies. With Aegis removed, you also gain access to other boons that Aegis might be covering for, thus you won't get the "blocked" text all over your screen. <span data-armory-embed="items" data-armory-ids="24548" data-armory-size="25" data-armory-inline-text="wiki"></span> has a cooldown of 5 seconds, and the radius mentioned in the tooltip happens around the enemy struck - not you. So a simple auto attack that crits will trigger the sigil.</p>

        <p>This is all done by buffing up on Precision (crit chance) by using <span data-armory-embed="items" data-armory-ids="24723" data-armory-size="25" data-armory-inline-text="wiki"></span> instead of <em>ye olde</em> Scholar, as the <span data-armory-embed="items" data-armory-ids="24548" data-armory-size="25" data-armory-inline-text="wiki"></span> only triggers on crit hit. Thus, upping the chance of critting is the goal. And by theorycrafting, you'll hit a sweet spot of 77.52% crit chance <em>without</em> Fury. But you'll have plenty of access to Fury, which will buff it up to staggering 97.52% - practically 100%. And you're still maintaining an okay level of Power with a mix of Marauder- and Berserker gear.</p>

        <h3>Traits</h3>
        <div class="build-traits">
            <div class="build-header">Spite</div>
            <div
                class="build-specialization"
                data-armory-embed="specializations"
                data-armory-ids="53"
                data-armory-53-traits="914,829,853"
            ></div>
            <div class="build-alternative">
                <p>Alternatives:</p>
                <ul>
                    <li>
                        <div data-armory-embed="traits" data-armory-ids="903" data-armory-size="25" data-armory-inline-text="wiki"></div>
                        for potentially more boon strips, however, you should be aware of the 30 second linked cooldown with <div data-armory-embed="skills" data-armory-ids="44663" data-armory-size="25" data-armory-inline-text="wiki"></div> as this is the only time you'll be "in shroud".
                    </li>
                </ul>
            </div>
        </div>

        <div class="build-traits">
            <div class="build-header">Curses</div>
            <div
                class="build-specialization"
                data-armory-embed="specializations"
                data-armory-ids="39"
                data-armory-39-traits="2013,1693,801"
            ></div>
        </div>

        <div class="build-traits">
            <div class="build-header">Scourge</div>
            <div
                class="build-specialization"
                data-armory-embed="specializations"
                data-armory-ids="60"
                data-armory-60-traits="2167,2067,2080"
            ></div>
        </div>

        <h3>Skills</h3>
        <div class="build-skills">
            <ul class="f-skills-list">
                <div class="skill-list-description">Shroud</div>
                <li>
                    <div
                        data-armory-embed="skills"
                        data-armory-size="40"
                        data-armory-ids="44946,40813,43448,44428,44663"
                    ></div>
                </li>
            </ul>
            <ul class="skills-list">
                <div class="skill-list-description">Axe/Focus</div>
                <li>
                    <div
                        data-armory-embed="skills"
                        data-armory-size="65"
                        data-armory-ids="10561,10528,10701,55050,10555"
                    ></div>
                </li>
                <div class="skill-list-description">Scepter/Dagger</div>
                <li>
                    <div
                        data-armory-embed="skills"
                        data-armory-size="65"
                        data-armory-ids="10698,10532,51647,10705,10706"
                    ></div>
                </li>
            </ul>
            <ul class="utilities-list">
                <div class="skill-list-description">Utilities</div>
                <li>
                    <div
                        data-armory-embed="skills"
                        data-armory-size="65"
                        data-armory-ids="43148,10545,10612,40274,42355"
                    ></div>
                </li>
            </ul>
        </div>

        <div class="build-description">
            <p>Skills explained:</p>
            <p>Fairly standard for Scourge by now. Axe/focus for single target with <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10528" data-armory-inline-text="wiki"></span> and <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10555" data-armory-inline-text="wiki"></span> as main damage dealers. Especially <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10555" data-armory-inline-text="wiki"></span> with it's potential to remove 3 boons and do damage based on that. Target low toughness classes with this.</p>

            <p>Scepter/dagger is also straight forward. These are more AoE-based with <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="51647" data-armory-inline-text="wiki"></span> and <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10706" data-armory-inline-text="wiki"></span> that each converts 1 boon on 5 targets. However, last skill is a bit tricky to land, so aim for the group of enemies and maybe try to anticipate where they will be.</p>

            <p>Utilities - now what the heck is <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10612" data-armory-inline-text="wiki"></span> doing there? There's a good reason for that: more strips. It potentially removes 2 boons on 5 targets in a 600 range - the same as <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10701" data-armory-inline-text="wiki"></span>. That's 10 boons stripped. And again, I must reiterate this. This build isn't primarily a DPS build, so a damage well isn't the priority. And you get a nice passive with a 25% movement speed, which gives you a better chance to <strong>stay on tag</strong>.</p>

            <p>The rest are pretty straight forward, and are all involved with removing boons. <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="43148" data-armory-inline-text="wiki"></span> removes 1 boon 5 targets in a 240 range, so use it when you're in the middle of a group of enemies - just like your shades. <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="10545" data-armory-inline-text="wiki"></span> is the boon corruption well, signet was explained. And even though <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="40274" data-armory-inline-text="wiki"></span> was nerfed a bit, it's still a strong skill. And it provides you with some much-needed self-stability for 6 seconds, which can be life-saving when those pesky roamers are trying to pull you off a cliff. And last there's <span data-armory-embed="skills" data-armory-size="25" data-armory-ids="42355" data-armory-inline-text="wiki"></span> which will rip boons left and right. Try and use it with caution as this is a self cast.</p>
        </div>

        <h3>Gear</h3>
        <div class="gear-wrapper">
            <div class="build-armor">
                <div class="gear-list">
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="82925"
                            data-armory-82925-stat="1111"
                            data-armory-82925-upgrades="24723"
                            data-armory-82925-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-82925-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Head</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="83308"
                            data-armory-83308-stat="1111"
                            data-armory-83308-upgrades="24723"
                            data-armory-83308-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-83308-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Shoulders</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="84508"
                            data-armory-84508-stat="1111"
                            data-armory-84508-upgrades="24723"
                            data-armory-84508-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-84508-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Chest</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="82109"
                            data-armory-82109-stat="1111"
                            data-armory-82109-upgrades="24723"
                            data-armory-82109-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-82109-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Hands</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="82502"
                            data-armory-82502-stat="1111"
                            data-armory-82502-upgrades="24723"
                            data-armory-82502-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-82502-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Legs</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="83482"
                            data-armory-83482-stat="1111"
                            data-armory-83482-upgrades="24723"
                            data-armory-83482-upgrade-count="{&quot;24723&quot;: 6}"
                            data-armory-83482-infusions="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Feet</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                </div>
                <div class="gear-list">
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="77474"
                            data-armory-77474-stat="1111"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Backpiece</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="81908"
                            data-armory-81908-stat="1111"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Accessory</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="91048"
                            data-armory-91048-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Accessory</div>
                        <div class="gear-stat">Berserker</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="92991"
                            data-armory-92991-stat="1111"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Amulet</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="93105"
                            data-armory-93105-stat="1111"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Ring</div>
                        <div class="gear-stat">Marauder</div>
                    </div>
                    <div class="gear-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="93105"
                            data-armory-93105-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="gear-description">Ring</div>
                        <div class="gear-stat">Berserker</div>
                    </div>
                </div>
            </div>
            <div class="build-weapons">
                <div class="weapons-list">
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="76158"
                            data-armory-76158-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Axe</div>
                        <div class="weapon-stat">Berserker</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="86098"
                            data-armory-86098-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Focus</div>
                        <div class="weapon-stat">Berserker</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="24548"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Sigil</div>
                        <div class="weapon-stat">Sigil of Fire</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="24607"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Sigil</div>
                        <div class="weapon-stat">Sigil of Energy</div>
                    </div>
                </div>
                <div class="weapons-list bottom">
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="88576"
                            data-armory-88576-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Scepter</div>
                        <div class="weapon-stat">Berserker</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="30607"
                            data-armory-30607-stat="599"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Dagger</div>
                        <div class="weapon-stat">Berserker</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="24548"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Sigil</div>
                        <div class="weapon-stat">Sigil of Fire</div>
                    </div>
                    <div class="weapons-list-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="24607"
                            data-armory-size="65"
                        ></div>
                        <div class="weapon-description">Sigil</div>
                        <div class="weapon-stat">Sigil of Energy</div>
                    </div>
                </div>
                <div class="build-runes-infusions">
                    <div class="build-runes-infusions-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="24723"
                            data-armory-size="65"
                        ></div>
                        <div class="rune-infusion-description">Rune</div>
                        <div class="rune-infusion-stat">x6</div>
                    </div>
                    <div class="build-runes-infusions-item">
                        <div
                            data-armory-embed="items"
                            data-armory-ids="43254"
                            data-armory-size="65"
                        ></div>
                        <div class="rune-infusion-description">Infusion</div>
                        <div class="rune-infusion-stat">x18</div>
                    </div>
                </div>
            </div>
        </div>

        <h3>Variants</h3>
        <ul class="variants-list">
            <li><span data-armory-embed="items" data-armory-ids="24572" data-armory-size="25" data-armory-inline-text="wiki"></span> instead of <span data-armory-embed="items" data-armory-ids="24607" data-armory-size="25" data-armory-inline-text="wiki"></span> for some extra strips when flanking, but it's a less defensive option</li>
        </ul>

        <h3>Consumables</h3>
        <ul class="consumables-list">
            <li><span data-armory-embed="items" data-armory-ids="91753" data-armory-size="25" data-armory-inline-text="wiki"></span></li>
            <li class="alt"><span data-armory-embed="items" data-armory-ids="79786" data-armory-size="25" data-armory-inline-text="wiki"></span> discount option</li>
            <li><span data-armory-embed="items" data-armory-ids="9443" data-armory-size="25" data-armory-inline-text="wiki"></span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
//
</style>
