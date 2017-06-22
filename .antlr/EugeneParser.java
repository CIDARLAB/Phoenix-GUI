// Generated from /Users/Kat/Documents/BU/CIDAR/Phoenix-GUI/Eugene.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class EugeneParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		T__59=60, T__60=61, T__61=62, T__62=63, T__63=64, T__64=65, T__65=66, 
		T__66=67, T__67=68, T__68=69, T__69=70, T__70=71, T__71=72, T__72=73, 
		T__73=74, T__74=75, T__75=76, T__76=77, T__77=78, T__78=79, T__79=80, 
		T__80=81, T__81=82, T__82=83, T__83=84, PLUS=85, MINUS=86, MULT=87, DIV=88, 
		LEFTP=89, RIGHTP=90, LEFTSBR=91, RIGHTSBR=92, LEFTCUR=93, RIGHTCUR=94, 
		DOLLAR=95, EQUALS=96, UNDERS=97, SEMIC=98, COLON=99, COMMA=100, DOT=101, 
		DOTDOT=102, PIPE=103, NUM=104, BOOL=105, BOOLEAN=106, IMAGE=107, PROPERTY=108, 
		TYPE=109, PART_TYPE=110, PART=111, DEVICE=112, RULE=113, TXT=114, ADDPROPS=115, 
		AMP=116, REF=117, NEQUAL=118, LTHAN=119, GTHAN=120, LEQUAL=121, GEQUAL=122, 
		UC_AND=123, LC_AND=124, LOG_AND=125, UC_OR=126, LC_OR=127, LOG_OR=128, 
		UC_NOT=129, LC_NOT=130, OP_NOT=131, ASSERT=132, NOTE=133, LC_IF=134, UC_IF=135, 
		LC_ELSEIF=136, UC_ELSEIF=137, LC_ELSE=138, UC_ELSE=139, UC_ON=140, LC_ON=141, 
		TRUE_LC=142, TRUE_UC=143, FALSE_LC=144, FALSE_UC=145, STRICT=146, FLEXIBLE=147, 
		COLLECTION=148, RULE_BUILDER=149, ARRAY=150, SBOL=151, GENBANK=152, REGISTRY=153, 
		INTERACTION=154, UC_REPRESSES=155, LC_REPRESSES=156, UC_INDUCES=157, LC_INDUCES=158, 
		HASHMARK=159, LC_FORALL=160, UC_FORALL=161, LC_FOR=162, UC_FOR=163, LC_WHILE=164, 
		UC_WHILE=165, ARROW=166, GRAMMAR=167, RETURN_UC=168, RETURN_LC=169, UC_PERMUTE=170, 
		LC_PERMUTE=171, UC_PRODUCT=172, LC_PRODUCT=173, INCLUDE_LC=174, INCLUDE_UC=175, 
		IMPORT_LC=176, IMPORT_UC=177, EXPORT_LC=178, EXPORT_UC=179, PRINT_LC=180, 
		PRINT_UC=181, PRINTLN_LC=182, PRINTLN_UC=183, SIZEOF_LC=184, SIZEOF_UC=185, 
		SIZE_OF_LC=186, SIZE_OF_UC=187, SIZE_LC=188, SIZE_UC=189, RANDOM_LC=190, 
		RANDOM_UC=191, SAVE_LC=192, SAVE_UC=193, STORE_LC=194, STORE_UC=195, VISUALIZE_LC=196, 
		VISUALIZE_UC=197, LC_SEQUENCE_OF=198, UC_SEQUENCE_OF=199, EXIT_UC=200, 
		EXIT_LC=201, CREATE_UC=202, CREATE_LC=203, QUERY_UC=204, QUERY_LC=205, 
		READ_UC=206, READ_LC=207, UPDATE_UC=208, UPDATE_LC=209, DELETE_UC=210, 
		DELETE_LC=211, INT=212, REAL=213, ID=214, WS=215, NEWLINE=216, LINE_COMMENT=217, 
		ML_COMMENT=218, STRING=219;
	public static final int
		RULE_file = 0, RULE_countingConstraints = 1, RULE_positionConstraints = 2, 
		RULE_orientationConstraints = 3, RULE_interactionConstraints = 4, RULE_ruleOperators = 5, 
		RULE_ruleOperator = 6, RULE_relationalOperators = 7, RULE_grammarDeclaration = 8, 
		RULE_list_of_production_rules = 9, RULE_production_rule = 10, RULE_right_hand_side = 11;
	public static final String[] ruleNames = {
		"file", "countingConstraints", "positionConstraints", "orientationConstraints", 
		"interactionConstraints", "ruleOperators", "ruleOperator", "relationalOperators", 
		"grammarDeclaration", "list_of_production_rules", "production_rule", "right_hand_side"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'CONTAINS'", "'contains'", "'NOTCONTAINS'", "'notcontains'", "'NOTMORETHAN'", 
		"'notmorethan'", "'EXACTLY'", "'exactly'", "'NOTEXACTLY'", "'notexactly'", 
		"'MORETHAN'", "'morethan'", "'SAME_COUNT'", "'same_count'", "'STARTSWITH'", 
		"'startswith'", "'BEFORE'", "'before'", "'ALWAYS_NEXTTO'", "'always_nextto'", 
		"'NEXTTO'", "'nextto'", "'AFTER'", "'after'", "'SOME_BEFORE'", "'some_before'", 
		"'ALL_BEFORE'", "'all_before'", "'SOME_AFTER'", "'some_after'", "'ALL_AFTER'", 
		"'all_after'", "'ENDSWITH'", "'endswith'", "'FORWARD'", "'forward'", "'REVERSE'", 
		"'reverse'", "'SAME_ORIENTATION'", "'same_orientation'", "'ALL_FORWARD'", 
		"'all_forward'", "'ALL_REVERSE'", "'all_reverse'", "'ALL_SAME_ORIENTATION'", 
		"'all_same_orientation'", "'DRIVES'", "'drives'", "'BINDS'", "'binds'", 
		"'WITH'", "'with'", "'THEN'", "'then'", "'ALL_NEXTTO'", "'all_nextto'", 
		"'SOME_NEXTTO'", "'some_nextto'", "'EQUALS'", "'equals'", "'MATCHES'", 
		"'matches'", "'SOME_FORWARD'", "'some_forward'", "'SOME_REVERSE'", "'some_reverse'", 
		"'SOME_SAME_ORIENTATION'", "'some_same_orientation'", "'TEMPLATE'", "'template'", 
		"'SEQUENCE'", "'sequence'", "'ALTERNATE_ORIENTATION'", "'alternate_orientation'", 
		"'NOTWITH'", "'notwith'", "'NOTTHEN'", "'notthen'", "'NOTEQUALS'", "'notequals'", 
		"'NOTMATCHES'", "'notmatches'", "'SOUNDSLIKE'", "'soundslike'", "'+'", 
		"'-'", "'*'", "'/'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'$'", 
		"'='", "'_'", "';'", "':'", "','", "'.'", "'..'", "'|'", "'num'", "'bool'", 
		"'boolean'", "'Image'", "'Property'", "'Type'", "'PartType'", "'Part'", 
		"'Device'", "'Rule'", "'txt'", "'addProperties'", "'&'", "'ref'", "'!='", 
		"'<'", "'>'", "'<='", "'>='", "'AND'", "'and'", "'/\\'", "'OR'", "'or'", 
		"'\\/'", "'NOT'", "'not'", "'!'", "'Assert'", "'Note'", "'if'", "'IF'", 
		"'elseif'", "'ELSEIF'", "'else'", "'ELSE'", "'ON'", "'on'", "'true'", 
		"'TRUE'", "'false'", "'FALSE'", "'strict'", "'flexible'", "'Collection'", 
		"'RuleBuilder'", "'Array'", "'SBOL'", "'Genbank'", "'Registry'", "'Interaction'", 
		"'REPRESSES'", "'represses'", "'INDUCES'", "'induces'", "'#'", "'forall'", 
		"'FORALL'", "'for'", "'FOR'", "'while'", "'WHILE'", "'-->'", "'Grammar'", 
		"'RETURN'", "'return'", "'PERMUTE'", "'permute'", "'PRODUCT'", "'product'", 
		"'include'", "'INCLUDE'", "'import'", "'IMPORT'", "'export'", "'EXPORT'", 
		"'print'", "'PRINT'", "'println'", "'PRINTLN'", "'sizeof'", "'SIZEOF'", 
		"'size_of'", "'SIZE_OF'", "'size'", "'SIZE'", "'random'", "'RANDOM'", 
		"'save'", "'SAVE'", "'store'", "'STORE'", "'visualize'", "'VISUALIZE'", 
		"'sequence_of'", "'SEQUENCE_OF'", "'EXIT'", "'exit'", "'CREATE'", "'create'", 
		"'QUERY'", "'query'", "'READ'", "'read'", "'UPDATE'", "'update'", "'DELETE'", 
		"'delete'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, "PLUS", "MINUS", "MULT", "DIV", "LEFTP", "RIGHTP", "LEFTSBR", "RIGHTSBR", 
		"LEFTCUR", "RIGHTCUR", "DOLLAR", "EQUALS", "UNDERS", "SEMIC", "COLON", 
		"COMMA", "DOT", "DOTDOT", "PIPE", "NUM", "BOOL", "BOOLEAN", "IMAGE", "PROPERTY", 
		"TYPE", "PART_TYPE", "PART", "DEVICE", "RULE", "TXT", "ADDPROPS", "AMP", 
		"REF", "NEQUAL", "LTHAN", "GTHAN", "LEQUAL", "GEQUAL", "UC_AND", "LC_AND", 
		"LOG_AND", "UC_OR", "LC_OR", "LOG_OR", "UC_NOT", "LC_NOT", "OP_NOT", "ASSERT", 
		"NOTE", "LC_IF", "UC_IF", "LC_ELSEIF", "UC_ELSEIF", "LC_ELSE", "UC_ELSE", 
		"UC_ON", "LC_ON", "TRUE_LC", "TRUE_UC", "FALSE_LC", "FALSE_UC", "STRICT", 
		"FLEXIBLE", "COLLECTION", "RULE_BUILDER", "ARRAY", "SBOL", "GENBANK", 
		"REGISTRY", "INTERACTION", "UC_REPRESSES", "LC_REPRESSES", "UC_INDUCES", 
		"LC_INDUCES", "HASHMARK", "LC_FORALL", "UC_FORALL", "LC_FOR", "UC_FOR", 
		"LC_WHILE", "UC_WHILE", "ARROW", "GRAMMAR", "RETURN_UC", "RETURN_LC", 
		"UC_PERMUTE", "LC_PERMUTE", "UC_PRODUCT", "LC_PRODUCT", "INCLUDE_LC", 
		"INCLUDE_UC", "IMPORT_LC", "IMPORT_UC", "EXPORT_LC", "EXPORT_UC", "PRINT_LC", 
		"PRINT_UC", "PRINTLN_LC", "PRINTLN_UC", "SIZEOF_LC", "SIZEOF_UC", "SIZE_OF_LC", 
		"SIZE_OF_UC", "SIZE_LC", "SIZE_UC", "RANDOM_LC", "RANDOM_UC", "SAVE_LC", 
		"SAVE_UC", "STORE_LC", "STORE_UC", "VISUALIZE_LC", "VISUALIZE_UC", "LC_SEQUENCE_OF", 
		"UC_SEQUENCE_OF", "EXIT_UC", "EXIT_LC", "CREATE_UC", "CREATE_LC", "QUERY_UC", 
		"QUERY_LC", "READ_UC", "READ_LC", "UPDATE_UC", "UPDATE_LC", "DELETE_UC", 
		"DELETE_LC", "INT", "REAL", "ID", "WS", "NEWLINE", "LINE_COMMENT", "ML_COMMENT", 
		"STRING"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Eugene.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public EugeneParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class FileContext extends ParserRuleContext {
		public CountingConstraintsContext countingConstraints() {
			return getRuleContext(CountingConstraintsContext.class,0);
		}
		public List<PositionConstraintsContext> positionConstraints() {
			return getRuleContexts(PositionConstraintsContext.class);
		}
		public PositionConstraintsContext positionConstraints(int i) {
			return getRuleContext(PositionConstraintsContext.class,i);
		}
		public List<OrientationConstraintsContext> orientationConstraints() {
			return getRuleContexts(OrientationConstraintsContext.class);
		}
		public OrientationConstraintsContext orientationConstraints(int i) {
			return getRuleContext(OrientationConstraintsContext.class,i);
		}
		public List<InteractionConstraintsContext> interactionConstraints() {
			return getRuleContexts(InteractionConstraintsContext.class);
		}
		public InteractionConstraintsContext interactionConstraints(int i) {
			return getRuleContext(InteractionConstraintsContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			countingConstraints();
			setState(28); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					setState(28);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
					case 1:
						{
						setState(25);
						positionConstraints();
						}
						break;
					case 2:
						{
						setState(26);
						orientationConstraints();
						}
						break;
					case 3:
						{
						setState(27);
						interactionConstraints();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(30); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CountingConstraintsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(EugeneParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(EugeneParser.ID, i);
		}
		public TerminalNode INT() { return getToken(EugeneParser.INT, 0); }
		public CountingConstraintsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_countingConstraints; }
	}

	public final CountingConstraintsContext countingConstraints() throws RecognitionException {
		CountingConstraintsContext _localctx = new CountingConstraintsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_countingConstraints);
		int _la;
		try {
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==T__1) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(33);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				_la = _input.LA(1);
				if ( !(_la==T__2 || _la==T__3) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(35);
				match(ID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(36);
				match(ID);
				setState(37);
				_la = _input.LA(1);
				if ( !(_la==T__4 || _la==T__5) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(38);
				match(INT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(39);
				match(ID);
				setState(40);
				_la = _input.LA(1);
				if ( !(_la==T__6 || _la==T__7) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(41);
				match(INT);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				match(ID);
				setState(43);
				_la = _input.LA(1);
				if ( !(_la==T__8 || _la==T__9) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(44);
				match(INT);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(45);
				match(ID);
				setState(46);
				_la = _input.LA(1);
				if ( !(_la==T__10 || _la==T__11) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(47);
				match(ID);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(48);
				match(ID);
				setState(49);
				_la = _input.LA(1);
				if ( !(_la==T__12 || _la==T__13) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(50);
				match(ID);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PositionConstraintsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(EugeneParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(EugeneParser.ID, i);
		}
		public PositionConstraintsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_positionConstraints; }
	}

	public final PositionConstraintsContext positionConstraints() throws RecognitionException {
		PositionConstraintsContext _localctx = new PositionConstraintsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_positionConstraints);
		int _la;
		try {
			setState(77);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(54);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				match(ID);
				setState(56);
				_la = _input.LA(1);
				if ( !(_la==T__16 || _la==T__17) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(57);
				match(ID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(58);
				match(ID);
				setState(59);
				_la = _input.LA(1);
				if ( !(_la==T__18 || _la==T__19) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(60);
				match(ID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(61);
				match(ID);
				setState(62);
				_la = _input.LA(1);
				if ( !(_la==T__20 || _la==T__21) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(63);
				match(ID);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(64);
				match(ID);
				setState(65);
				_la = _input.LA(1);
				if ( !(_la==T__22 || _la==T__23) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(66);
				match(ID);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(67);
				_la = _input.LA(1);
				if ( !(_la==T__24 || _la==T__25) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(68);
				match(ID);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(69);
				_la = _input.LA(1);
				if ( !(_la==T__26 || _la==T__27) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(70);
				match(ID);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(71);
				_la = _input.LA(1);
				if ( !(_la==T__28 || _la==T__29) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(72);
				match(ID);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(73);
				_la = _input.LA(1);
				if ( !(_la==T__30 || _la==T__31) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(74);
				match(ID);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(75);
				_la = _input.LA(1);
				if ( !(_la==T__32 || _la==T__33) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(76);
				match(ID);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrientationConstraintsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(EugeneParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(EugeneParser.ID, i);
		}
		public OrientationConstraintsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orientationConstraints; }
	}

	public final OrientationConstraintsContext orientationConstraints() throws RecognitionException {
		OrientationConstraintsContext _localctx = new OrientationConstraintsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_orientationConstraints);
		int _la;
		try {
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__34:
			case T__35:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				_la = _input.LA(1);
				if ( !(_la==T__34 || _la==T__35) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(80);
				match(ID);
				}
				break;
			case T__36:
			case T__37:
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
				_la = _input.LA(1);
				if ( !(_la==T__36 || _la==T__37) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(82);
				match(ID);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(83);
				match(ID);
				setState(84);
				_la = _input.LA(1);
				if ( !(_la==T__38 || _la==T__39) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(85);
				match(ID);
				}
				break;
			case T__40:
			case T__41:
				enterOuterAlt(_localctx, 4);
				{
				setState(86);
				_la = _input.LA(1);
				if ( !(_la==T__40 || _la==T__41) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__42:
			case T__43:
				enterOuterAlt(_localctx, 5);
				{
				setState(87);
				_la = _input.LA(1);
				if ( !(_la==T__42 || _la==T__43) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__44:
			case T__45:
				enterOuterAlt(_localctx, 6);
				{
				setState(88);
				_la = _input.LA(1);
				if ( !(_la==T__44 || _la==T__45) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InteractionConstraintsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(EugeneParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(EugeneParser.ID, i);
		}
		public InteractionConstraintsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interactionConstraints; }
	}

	public final InteractionConstraintsContext interactionConstraints() throws RecognitionException {
		InteractionConstraintsContext _localctx = new InteractionConstraintsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_interactionConstraints);
		int _la;
		try {
			setState(103);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(91);
				match(ID);
				setState(92);
				_la = _input.LA(1);
				if ( !(_la==UC_REPRESSES || _la==LC_REPRESSES) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(93);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(94);
				match(ID);
				setState(95);
				_la = _input.LA(1);
				if ( !(_la==UC_INDUCES || _la==LC_INDUCES) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(96);
				match(ID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(97);
				match(ID);
				setState(98);
				_la = _input.LA(1);
				if ( !(_la==T__46 || _la==T__47) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(99);
				match(ID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(100);
				match(ID);
				setState(101);
				_la = _input.LA(1);
				if ( !(_la==T__48 || _la==T__49) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(102);
				match(ID);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RuleOperatorsContext extends ParserRuleContext {
		public RuleOperatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleOperators; }
	}

	public final RuleOperatorsContext ruleOperators() throws RecognitionException {
		RuleOperatorsContext _localctx = new RuleOperatorsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ruleOperators);
		int _la;
		try {
			setState(121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__50:
			case T__51:
				enterOuterAlt(_localctx, 1);
				{
				setState(105);
				_la = _input.LA(1);
				if ( !(_la==T__50 || _la==T__51) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__52:
			case T__53:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				_la = _input.LA(1);
				if ( !(_la==T__52 || _la==T__53) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__54:
			case T__55:
				enterOuterAlt(_localctx, 3);
				{
				setState(107);
				_la = _input.LA(1);
				if ( !(_la==T__54 || _la==T__55) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__56:
			case T__57:
				enterOuterAlt(_localctx, 4);
				{
				setState(108);
				_la = _input.LA(1);
				if ( !(_la==T__56 || _la==T__57) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__58:
			case T__59:
				enterOuterAlt(_localctx, 5);
				{
				setState(109);
				_la = _input.LA(1);
				if ( !(_la==T__58 || _la==T__59) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__60:
			case T__61:
				enterOuterAlt(_localctx, 6);
				{
				setState(110);
				_la = _input.LA(1);
				if ( !(_la==T__60 || _la==T__61) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__62:
			case T__63:
				enterOuterAlt(_localctx, 7);
				{
				setState(111);
				_la = _input.LA(1);
				if ( !(_la==T__62 || _la==T__63) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__64:
			case T__65:
				enterOuterAlt(_localctx, 8);
				{
				setState(112);
				_la = _input.LA(1);
				if ( !(_la==T__64 || _la==T__65) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__66:
			case T__67:
				enterOuterAlt(_localctx, 9);
				{
				setState(113);
				_la = _input.LA(1);
				if ( !(_la==T__66 || _la==T__67) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__68:
			case T__69:
				enterOuterAlt(_localctx, 10);
				{
				setState(114);
				_la = _input.LA(1);
				if ( !(_la==T__68 || _la==T__69) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__70:
			case T__71:
				enterOuterAlt(_localctx, 11);
				{
				setState(115);
				_la = _input.LA(1);
				if ( !(_la==T__70 || _la==T__71) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__72:
			case T__73:
				enterOuterAlt(_localctx, 12);
				{
				setState(116);
				_la = _input.LA(1);
				if ( !(_la==T__72 || _la==T__73) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__74:
			case T__75:
				enterOuterAlt(_localctx, 13);
				{
				setState(117);
				_la = _input.LA(1);
				if ( !(_la==T__74 || _la==T__75) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__76:
			case T__77:
				enterOuterAlt(_localctx, 14);
				{
				setState(118);
				_la = _input.LA(1);
				if ( !(_la==T__76 || _la==T__77) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__78:
			case T__79:
				enterOuterAlt(_localctx, 15);
				{
				setState(119);
				_la = _input.LA(1);
				if ( !(_la==T__78 || _la==T__79) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__80:
			case T__81:
				enterOuterAlt(_localctx, 16);
				{
				setState(120);
				_la = _input.LA(1);
				if ( !(_la==T__80 || _la==T__81) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RuleOperatorContext extends ParserRuleContext {
		public RuleOperatorsContext ruleOperators() {
			return getRuleContext(RuleOperatorsContext.class,0);
		}
		public RuleOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleOperator; }
	}

	public final RuleOperatorContext ruleOperator() throws RecognitionException {
		RuleOperatorContext _localctx = new RuleOperatorContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ruleOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			ruleOperators();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationalOperatorsContext extends ParserRuleContext {
		public List<TerminalNode> EQUALS() { return getTokens(EugeneParser.EQUALS); }
		public TerminalNode EQUALS(int i) {
			return getToken(EugeneParser.EQUALS, i);
		}
		public TerminalNode NEQUAL() { return getToken(EugeneParser.NEQUAL, 0); }
		public TerminalNode LTHAN() { return getToken(EugeneParser.LTHAN, 0); }
		public TerminalNode GTHAN() { return getToken(EugeneParser.GTHAN, 0); }
		public TerminalNode LEQUAL() { return getToken(EugeneParser.LEQUAL, 0); }
		public TerminalNode GEQUAL() { return getToken(EugeneParser.GEQUAL, 0); }
		public RelationalOperatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalOperators; }
	}

	public final RelationalOperatorsContext relationalOperators() throws RecognitionException {
		RelationalOperatorsContext _localctx = new RelationalOperatorsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_relationalOperators);
		int _la;
		try {
			setState(141);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EQUALS:
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				match(EQUALS);
				setState(126);
				match(EQUALS);
				}
				break;
			case NEQUAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				match(NEQUAL);
				}
				break;
			case LTHAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(128);
				match(LTHAN);
				}
				break;
			case GTHAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(129);
				match(GTHAN);
				}
				break;
			case LEQUAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(130);
				match(LEQUAL);
				}
				break;
			case GEQUAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(131);
				match(GEQUAL);
				}
				break;
			case T__0:
			case T__1:
				enterOuterAlt(_localctx, 7);
				{
				setState(132);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==T__1) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__2:
			case T__3:
				enterOuterAlt(_localctx, 8);
				{
				setState(133);
				_la = _input.LA(1);
				if ( !(_la==T__2 || _la==T__3) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__60:
			case T__61:
				enterOuterAlt(_localctx, 9);
				{
				setState(134);
				_la = _input.LA(1);
				if ( !(_la==T__60 || _la==T__61) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__80:
			case T__81:
				enterOuterAlt(_localctx, 10);
				{
				setState(135);
				_la = _input.LA(1);
				if ( !(_la==T__80 || _la==T__81) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__14:
			case T__15:
				enterOuterAlt(_localctx, 11);
				{
				setState(136);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__32:
			case T__33:
				enterOuterAlt(_localctx, 12);
				{
				setState(137);
				_la = _input.LA(1);
				if ( !(_la==T__32 || _la==T__33) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__58:
			case T__59:
				enterOuterAlt(_localctx, 13);
				{
				setState(138);
				_la = _input.LA(1);
				if ( !(_la==T__58 || _la==T__59) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__78:
			case T__79:
				enterOuterAlt(_localctx, 14);
				{
				setState(139);
				_la = _input.LA(1);
				if ( !(_la==T__78 || _la==T__79) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__82:
			case T__83:
				enterOuterAlt(_localctx, 15);
				{
				setState(140);
				_la = _input.LA(1);
				if ( !(_la==T__82 || _la==T__83) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GrammarDeclarationContext extends ParserRuleContext {
		public boolean defer;
		public Token n;
		public TerminalNode GRAMMAR() { return getToken(EugeneParser.GRAMMAR, 0); }
		public TerminalNode LEFTP() { return getToken(EugeneParser.LEFTP, 0); }
		public List_of_production_rulesContext list_of_production_rules() {
			return getRuleContext(List_of_production_rulesContext.class,0);
		}
		public TerminalNode RIGHTP() { return getToken(EugeneParser.RIGHTP, 0); }
		public TerminalNode ID() { return getToken(EugeneParser.ID, 0); }
		public GrammarDeclarationContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public GrammarDeclarationContext(ParserRuleContext parent, int invokingState, boolean defer) {
			super(parent, invokingState);
			this.defer = defer;
		}
		@Override public int getRuleIndex() { return RULE_grammarDeclaration; }
	}

	public final GrammarDeclarationContext grammarDeclaration(boolean defer) throws RecognitionException {
		GrammarDeclarationContext _localctx = new GrammarDeclarationContext(_ctx, getState(), defer);
		enterRule(_localctx, 16, RULE_grammarDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(GRAMMAR);
			setState(144);
			((GrammarDeclarationContext)_localctx).n = match(ID);
			setState(145);
			match(LEFTP);
			setState(146);
			list_of_production_rules(defer);
			setState(147);
			match(RIGHTP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class List_of_production_rulesContext extends ParserRuleContext {
		public boolean defer;
		public Production_ruleContext production_rule() {
			return getRuleContext(Production_ruleContext.class,0);
		}
		public TerminalNode SEMIC() { return getToken(EugeneParser.SEMIC, 0); }
		public List_of_production_rulesContext list_of_production_rules() {
			return getRuleContext(List_of_production_rulesContext.class,0);
		}
		public List_of_production_rulesContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public List_of_production_rulesContext(ParserRuleContext parent, int invokingState, boolean defer) {
			super(parent, invokingState);
			this.defer = defer;
		}
		@Override public int getRuleIndex() { return RULE_list_of_production_rules; }
	}

	public final List_of_production_rulesContext list_of_production_rules(boolean defer) throws RecognitionException {
		List_of_production_rulesContext _localctx = new List_of_production_rulesContext(_ctx, getState(), defer);
		enterRule(_localctx, 18, RULE_list_of_production_rules);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			production_rule(defer);
			setState(150);
			match(SEMIC);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(151);
				list_of_production_rules(defer);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Production_ruleContext extends ParserRuleContext {
		public boolean defer;
		public Token lhs;
		public TerminalNode ARROW() { return getToken(EugeneParser.ARROW, 0); }
		public Right_hand_sideContext right_hand_side() {
			return getRuleContext(Right_hand_sideContext.class,0);
		}
		public TerminalNode ID() { return getToken(EugeneParser.ID, 0); }
		public Production_ruleContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public Production_ruleContext(ParserRuleContext parent, int invokingState, boolean defer) {
			super(parent, invokingState);
			this.defer = defer;
		}
		@Override public int getRuleIndex() { return RULE_production_rule; }
	}

	public final Production_ruleContext production_rule(boolean defer) throws RecognitionException {
		Production_ruleContext _localctx = new Production_ruleContext(_ctx, getState(), defer);
		enterRule(_localctx, 20, RULE_production_rule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			((Production_ruleContext)_localctx).lhs = match(ID);
				
				
			setState(156);
			match(ARROW);
			setState(157);
			right_hand_side(defer);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Right_hand_sideContext extends ParserRuleContext {
		public boolean defer;
		public Token i;
		public TerminalNode ID() { return getToken(EugeneParser.ID, 0); }
		public TerminalNode COMMA() { return getToken(EugeneParser.COMMA, 0); }
		public Right_hand_sideContext right_hand_side() {
			return getRuleContext(Right_hand_sideContext.class,0);
		}
		public Right_hand_sideContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public Right_hand_sideContext(ParserRuleContext parent, int invokingState, boolean defer) {
			super(parent, invokingState);
			this.defer = defer;
		}
		@Override public int getRuleIndex() { return RULE_right_hand_side; }
	}

	public final Right_hand_sideContext right_hand_side(boolean defer) throws RecognitionException {
		Right_hand_sideContext _localctx = new Right_hand_sideContext(_ctx, getState(), defer);
		enterRule(_localctx, 22, RULE_right_hand_side);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			((Right_hand_sideContext)_localctx).i = match(ID);

				
			setState(163);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(161);
				match(COMMA);
				setState(162);
				right_hand_side(defer);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u00dd\u00a8\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\3\2\3\2\3\2\6\2\37\n\2\r\2\16\2 \3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\66"+
		"\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4P\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\5\5\\\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5"+
		"\6j\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\5\7|\n\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\5\t\u0090\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\5"+
		"\13\u009b\n\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\5\r\u00a6\n\r\3\r\3"+
		" \2\16\2\4\6\b\n\f\16\20\22\24\26\30\2.\3\2\3\4\3\2\5\6\3\2\7\b\3\2\t"+
		"\n\3\2\13\f\3\2\r\16\3\2\17\20\3\2\21\22\3\2\23\24\3\2\25\26\3\2\27\30"+
		"\3\2\31\32\3\2\33\34\3\2\35\36\3\2\37 \3\2!\"\3\2#$\3\2%&\3\2\'(\3\2)"+
		"*\3\2+,\3\2-.\3\2/\60\3\2\u009d\u009e\3\2\u009f\u00a0\3\2\61\62\3\2\63"+
		"\64\3\2\65\66\3\2\678\3\29:\3\2;<\3\2=>\3\2?@\3\2AB\3\2CD\3\2EF\3\2GH"+
		"\3\2IJ\3\2KL\3\2MN\3\2OP\3\2QR\3\2ST\3\2UV\2\u00d4\2\32\3\2\2\2\4\65\3"+
		"\2\2\2\6O\3\2\2\2\b[\3\2\2\2\ni\3\2\2\2\f{\3\2\2\2\16}\3\2\2\2\20\u008f"+
		"\3\2\2\2\22\u0091\3\2\2\2\24\u0097\3\2\2\2\26\u009c\3\2\2\2\30\u00a1\3"+
		"\2\2\2\32\36\5\4\3\2\33\37\5\6\4\2\34\37\5\b\5\2\35\37\5\n\6\2\36\33\3"+
		"\2\2\2\36\34\3\2\2\2\36\35\3\2\2\2\37 \3\2\2\2 !\3\2\2\2 \36\3\2\2\2!"+
		"\3\3\2\2\2\"#\t\2\2\2#\66\7\u00d8\2\2$%\t\3\2\2%\66\7\u00d8\2\2&\'\7\u00d8"+
		"\2\2\'(\t\4\2\2(\66\7\u00d6\2\2)*\7\u00d8\2\2*+\t\5\2\2+\66\7\u00d6\2"+
		"\2,-\7\u00d8\2\2-.\t\6\2\2.\66\7\u00d6\2\2/\60\7\u00d8\2\2\60\61\t\7\2"+
		"\2\61\66\7\u00d8\2\2\62\63\7\u00d8\2\2\63\64\t\b\2\2\64\66\7\u00d8\2\2"+
		"\65\"\3\2\2\2\65$\3\2\2\2\65&\3\2\2\2\65)\3\2\2\2\65,\3\2\2\2\65/\3\2"+
		"\2\2\65\62\3\2\2\2\66\5\3\2\2\2\678\t\t\2\28P\7\u00d8\2\29:\7\u00d8\2"+
		"\2:;\t\n\2\2;P\7\u00d8\2\2<=\7\u00d8\2\2=>\t\13\2\2>P\7\u00d8\2\2?@\7"+
		"\u00d8\2\2@A\t\f\2\2AP\7\u00d8\2\2BC\7\u00d8\2\2CD\t\r\2\2DP\7\u00d8\2"+
		"\2EF\t\16\2\2FP\7\u00d8\2\2GH\t\17\2\2HP\7\u00d8\2\2IJ\t\20\2\2JP\7\u00d8"+
		"\2\2KL\t\21\2\2LP\7\u00d8\2\2MN\t\22\2\2NP\7\u00d8\2\2O\67\3\2\2\2O9\3"+
		"\2\2\2O<\3\2\2\2O?\3\2\2\2OB\3\2\2\2OE\3\2\2\2OG\3\2\2\2OI\3\2\2\2OK\3"+
		"\2\2\2OM\3\2\2\2P\7\3\2\2\2QR\t\23\2\2R\\\7\u00d8\2\2ST\t\24\2\2T\\\7"+
		"\u00d8\2\2UV\7\u00d8\2\2VW\t\25\2\2W\\\7\u00d8\2\2X\\\t\26\2\2Y\\\t\27"+
		"\2\2Z\\\t\30\2\2[Q\3\2\2\2[S\3\2\2\2[U\3\2\2\2[X\3\2\2\2[Y\3\2\2\2[Z\3"+
		"\2\2\2\\\t\3\2\2\2]^\7\u00d8\2\2^_\t\31\2\2_j\7\u00d8\2\2`a\7\u00d8\2"+
		"\2ab\t\32\2\2bj\7\u00d8\2\2cd\7\u00d8\2\2de\t\33\2\2ej\7\u00d8\2\2fg\7"+
		"\u00d8\2\2gh\t\34\2\2hj\7\u00d8\2\2i]\3\2\2\2i`\3\2\2\2ic\3\2\2\2if\3"+
		"\2\2\2j\13\3\2\2\2k|\t\35\2\2l|\t\36\2\2m|\t\37\2\2n|\t \2\2o|\t!\2\2"+
		"p|\t\"\2\2q|\t#\2\2r|\t$\2\2s|\t%\2\2t|\t&\2\2u|\t\'\2\2v|\t(\2\2w|\t"+
		")\2\2x|\t*\2\2y|\t+\2\2z|\t,\2\2{k\3\2\2\2{l\3\2\2\2{m\3\2\2\2{n\3\2\2"+
		"\2{o\3\2\2\2{p\3\2\2\2{q\3\2\2\2{r\3\2\2\2{s\3\2\2\2{t\3\2\2\2{u\3\2\2"+
		"\2{v\3\2\2\2{w\3\2\2\2{x\3\2\2\2{y\3\2\2\2{z\3\2\2\2|\r\3\2\2\2}~\5\f"+
		"\7\2~\17\3\2\2\2\177\u0080\7b\2\2\u0080\u0090\7b\2\2\u0081\u0090\7x\2"+
		"\2\u0082\u0090\7y\2\2\u0083\u0090\7z\2\2\u0084\u0090\7{\2\2\u0085\u0090"+
		"\7|\2\2\u0086\u0090\t\2\2\2\u0087\u0090\t\3\2\2\u0088\u0090\t\"\2\2\u0089"+
		"\u0090\t,\2\2\u008a\u0090\t\t\2\2\u008b\u0090\t\22\2\2\u008c\u0090\t!"+
		"\2\2\u008d\u0090\t+\2\2\u008e\u0090\t-\2\2\u008f\177\3\2\2\2\u008f\u0081"+
		"\3\2\2\2\u008f\u0082\3\2\2\2\u008f\u0083\3\2\2\2\u008f\u0084\3\2\2\2\u008f"+
		"\u0085\3\2\2\2\u008f\u0086\3\2\2\2\u008f\u0087\3\2\2\2\u008f\u0088\3\2"+
		"\2\2\u008f\u0089\3\2\2\2\u008f\u008a\3\2\2\2\u008f\u008b\3\2\2\2\u008f"+
		"\u008c\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u008e\3\2\2\2\u0090\21\3\2\2"+
		"\2\u0091\u0092\7\u00a9\2\2\u0092\u0093\7\u00d8\2\2\u0093\u0094\7[\2\2"+
		"\u0094\u0095\5\24\13\2\u0095\u0096\7\\\2\2\u0096\23\3\2\2\2\u0097\u0098"+
		"\5\26\f\2\u0098\u009a\7d\2\2\u0099\u009b\5\24\13\2\u009a\u0099\3\2\2\2"+
		"\u009a\u009b\3\2\2\2\u009b\25\3\2\2\2\u009c\u009d\7\u00d8\2\2\u009d\u009e"+
		"\b\f\1\2\u009e\u009f\7\u00a8\2\2\u009f\u00a0\5\30\r\2\u00a0\27\3\2\2\2"+
		"\u00a1\u00a2\7\u00d8\2\2\u00a2\u00a5\b\r\1\2\u00a3\u00a4\7f\2\2\u00a4"+
		"\u00a6\5\30\r\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\31\3\2\2"+
		"\2\f\36 \65O[i{\u008f\u009a\u00a5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}