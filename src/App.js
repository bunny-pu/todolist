import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="total">
        <input className="addtodo" id="f55" placeholder="请输入代办事项" onkeydown="fun3(event)"/>
            <div className="list"  id="lll">
                <form action="/action_page.php" id="iii">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onmouseover = "func()"  onmouseout = "func1()"/>
                    <label id="dff">I have a bike</label>
                    <a id="ppp">删除此项待办ddd</a>
                    <br/><hr/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label> I have a car</label>
                    <a id="ppp">删除此项待办</a>
                    <br/>
                    <hr/>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                    <label> I have a boat</label>
                    <a id="ppp">删除此项待办</a>
                    <br/>
                </form>
            </div>

        <input className="sub" type="checkbox" id="sub_todos" onclick="checkAll(this)"/>
                <label for="vehicle1" id="vehicletext"> 已完成0/全部3</label><br/>
    </div>
  );
}

export default App;
