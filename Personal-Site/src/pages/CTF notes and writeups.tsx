import { AnimatedCallout } from "../components/callout/callout";
import Checkbox from "../components/checkbox/checkbox";
import InlineCodeBlock from "../components/code block/code block";


// OSINT, Forensics, Web, Binary, Crypto, Pwn, Reversing, Misc, Images
function CTFNotesAndWriteups() {
    return (
        <div>
            <h1>CTF Notes and Writeups</h1>
            <AnimatedCallout title="Useful Websites">
                <br />
            </AnimatedCallout>

            <AnimatedCallout title="Binary Exploitation/Pwn">
                Ghidra Decompiler, by default already installed on Kali Linux
            </AnimatedCallout>

            <AnimatedCallout title="Crypto">
                <a href="https://gchq.github.io/CyberChef/">CyberChef</a> - General encryption/decryption tool
                <br />
                <a href="https://cryptii.com/">Cryptii</a> - General encryption/decryption tool
                <br />
                <a href="https://www.dcode.fr/monoalphabetic-substitution">DCode</a> - Monoalphabetic substitution
                <br />
                <a href="https://planetcalc.com/8047/">PlanetCalc</a> - Monoalphabetic substitution
                <br />
                <a href="https://hashcat.net/wiki/doku.php?id=example_hashes">Hashcat</a> - example hashes
                <AnimatedCallout title="Password Cracking">
                    <a href="https://github.com/danielmiessler/SecLists">SecLists</a> - Wordlists and common passwords
                </AnimatedCallout>
            </AnimatedCallout>

            <AnimatedCallout title="Forensics">
                <Checkbox><InlineCodeBlock>file</InlineCodeBlock></Checkbox>
                <Checkbox><InlineCodeBlock>strings -n [number] [file]</InlineCodeBlock></Checkbox>
                <Checkbox><InlineCodeBlock>grep -i [pattern] [file]</InlineCodeBlock></Checkbox>
                <Checkbox><InlineCodeBlock>binwalk -e [file]</InlineCodeBlock></Checkbox>
                <Checkbox><InlineCodeBlock>exiftool [file]</InlineCodeBlock></Checkbox>
            </AnimatedCallout>

            <AnimatedCallout title="Images">
                <a href="https://www.aperisolve.com/cheatsheet>">AperiSolve</a> - Steganography

                <AnimatedCallout title="PNGs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquam obcaecati possimus quidem temporibus provident. Eius nam corporis, tenetur quibusdam, reprehenderit autem dolorem veniam enim, quaerat obcaecati a beatae et!
                </AnimatedCallout>

                <AnimatedCallout title="JPGs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquam obcaecati possimus quidem temporibus provident. Eius nam corporis, tenetur quibusdam, reprehenderit autem dolorem veniam enim, quaerat obcaecati a beatae et!
                </AnimatedCallout>
            </AnimatedCallout>

            <AnimatedCallout title="OSINT">
                <a href="https://attack.mitre.org/matrices/enterprise/">Attack Mitre</a> - Enterprise attack matrix
                <br />
                <a href="https://github.com/jivoi/awesome-osint">Awesome OSINT</a> - OSINT tools
            </AnimatedCallout>

            <AnimatedCallout title="SQL">
                <a href="https://portswigger.net/web-security/sql-injection">PortSwigger</a>
                <br />
                <a href="https://sqlmap.org/">Automatic SQL injection</a> (situational)
            </AnimatedCallout>

            <AnimatedCallout title="Web">
                <Checkbox>Check local storage and cookies</Checkbox>
                <Checkbox>Check for robots.txt and sitemap.xml</Checkbox>

                <br />
                <a href="https://www.kali.org/tools/dirb/">Dirb</a> - Directory brute forcing
            </AnimatedCallout>

        </div>
    );
}



export default CTFNotesAndWriteups;