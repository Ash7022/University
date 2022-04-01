import './css/card.css'
const Card = (props) => {
    return (
        <div id="card-parent">
            <div class="container">
                <h1 id="heading">𝑭𝒊𝒏𝒅 𝒀𝒐𝒖𝒓 𝑫𝒆𝒔𝒊𝒓𝒆𝒅 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒊𝒆𝒔</h1>
                <div class="form">
                    <form action = "/coleges">


                        <br /><br /><br />
                        <label for="field" id="line2">Choose the Field:-</label>
                        <select name="field" id="field">
                            <option value="Tier">Select Field</option>
                            <option value="t1">Technical </option>
                            <option value="t2">Non-Technical</option>

                        </select>

                        <br /><br /><br />

                        <label for="Tier" id="line3">Select the State for Universities:-</label>
                        <select name="State" id="State">
                            <option value="State">Select State </option>
                            <option value="s1">Odisha</option>
                            <option value="s2">Bihar</option>
                            <option value="s3">Maharastra</option>
                            <option value="s4">Karnataka</option>
                            <option value="s5">Delhi</option>
                            <option value="s6">West-bengal</option>
                            <option value="s7">Madhya-Pradesh</option>
                            <option value="s8">Uttar-Pradesh</option>
                            <option value="s9">Jharkhand</option>
                            <option value="s10">Andhra-Pradesh</option>
                            <option value="s11">Tamilnadu</option>
                            <option value="s12">Chattisgarh</option>
                            <option value="s13">Uttrakhand</option>
                            <option value="s14">Assam</option>
                            <option value="s15">Gujarat</option>
                            <option value="s16">Himachal-pradesh</option>
                            <option value="s17">Rajasthan</option>
                            <option value="s18">Jammu & Kashmir</option>
                            <option value="s19">Arunachal-pradesh</option>
                            <option value="s20">Kerala</option>

                        </select>
                        <br/><br/><br/>
                            <input type="submit" value="Search" id="submit"/>

                            </form>

                        </div>
                        </div>
                        </div>
                        )
}
                        export default Card;