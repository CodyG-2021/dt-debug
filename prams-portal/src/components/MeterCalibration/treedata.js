function TreeData() {
  return (
    <div className="treeview-animated w-20 border mx-4 my-4">
      <h6 className="pt-3 pl-3">Folders</h6>
      <hr />
      <ul className="treeview-animated-list mb-3">
        <li className="treeview-animated-items">
          <a className="closed">
            <i className="fas fa-angle-right"></i>
            <span>
              <i className="far fa-envelope-open ic-w mx-1"></i>Mail
            </span>
          </a>
          <ul className="nested">
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-bell ic-w mr-1"></i>Offers
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-address-book ic-w mr-1"></i>Contacts
              </div>
            </li>
            <li className="treeview-animated-items">
              <a className="closed">
                <i className="fas fa-angle-right"></i>
                <span>
                  <i className="far fa-calendar-alt ic-w mx-1"></i>Calendar
                </span>
              </a>
              <ul className="nested">
                <li>
                  <div className="treeview-animated-element">
                    <i className="far fa-clock ic-w mr-1"></i>Deadlines
                  </div>
                </li>
                <li>
                  <div className="treeview-animated-element">
                    <i className="fas fa-users ic-w mr-1"></i>Meetings
                  </div>
                </li>
                <li>
                  <div className="treeview-animated-element">
                    <i className="fas fa-basketball-ball ic-w mr-1"></i>Workouts
                  </div>
                </li>
                <li>
                  <div className="treeview-animated-element">
                    <i className="fas fa-mug-hot ic-w mr-1"></i>Events
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="treeview-animated-items">
          <a className="closed">
            <i className="fas fa-angle-right"></i>
            <span>
              <i className="far fa-folder-open ic-w mx-1"></i>Inbox
            </span>
          </a>
          <ul className="nested">
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-folder-open ic-w mr-1"></i>
                Admin
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-folder-open ic-w mr-1"></i>Corporate{" "}
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-folder-open ic-w mr-1"></i>Finance
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-folder-open ic-w mr-1"></i>Other
              </div>
            </li>
          </ul>
        </li>
        <li className="treeview-animated-items">
          <a className="closed">
            <i className="fas fa-angle-right"></i>
            <span>
              <i className="far fa-gem mx-1"></i>Favourites
            </span>
          </a>
          <ul className="nested">
            <li>
              <div className="treeview-animated-element">
                <i className="fas fa-pepper-hot ic-w mr-1"></i>Restaurants
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="far fa-eye ic-w mr-1"></i>Places
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="fas fa-gamepad ic-w mr-1"></i>Games
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="fas fa-cocktail ic-w mr-1"></i>Coctails
              </div>
            </li>
            <li>
              <div className="treeview-animated-element">
                <i className="fas fa-pizza-slice ic-w mr-1"></i>Food
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className="treeview-animated-element">
            <i className="far fa-comment ic-w mr-1"></i>Notes
          </div>
        </li>
        <li>
          <div className="treeview-animated-element">
            <i className="fas fa-cogs ic-w mr-1"></i>Settings
          </div>
        </li>
        <li>
          <div className="treeview-animated-element">
            <i className="fas fa-desktop ic-w mr-1"></i>Devices
          </div>
        </li>
        <li>
          <div className="treeview-animated-element">
            <i className="fas fa-trash-alt ic-w mr-1"></i>Deleted Items
          </div>
        </li>
      </ul>
    </div>
  );
}
export default TreeData;
